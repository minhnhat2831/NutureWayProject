import ComponentCard from "@/components/shared/ComponentCard";
import DoulasCard from "@/components/shared/DoulasCard";
import Header from "@/layout/HeaderLayout";
import { useNavigate, useParams } from "react-router";
import Scrollbar from "react-scrollbars-custom";
import useCategory from "../hooks/useCategory";
import { Icons } from "@/components/common/Icons";
import useDoula from "@/container/doulas/hook/useDoula";

export default function CategoryDetailContainer() {
    const nav = useNavigate()
    const { id } = useParams<{ id: string }>()
    const { useGetCategoryById } = useCategory()
    const { data: categoryData, loading : loadingCategory } = useGetCategoryById(id ?? '')
    const { useGetDoulaNear } = useDoula()
    const { data : doualaData, loading : loadingDoula } = useGetDoulaNear()

    const loading = loadingCategory || loadingDoula

    if (loading) {
        return <div className="h-screen bg-white flex flex-col justify-center items-center">
            <Icons.buttonIcon />
        </div>
    }

    return (<>
        <Header showBack title={`${categoryData?.name}`} titleAlign="center" />
        <div className="h-screen bg-white flex flex-col flex-1 overflow-auto">
            <div className="px-5 py-3">
                <p className="text-md font-normal italic leading-5 text-gray-400">Prenatal care experts near you</p>
                <Scrollbar style={{ width: '100%', height: 250 }}>
                    <div className="gap-4 flex flex-row my-5 px-2">
                        {doualaData.map((doula, index) => (
                            <DoulasCard
                                key={index}
                                title={doula?.user?.fullName}
                                subTitle={doula?.title}
                                rateStar={doula?.starAvg}
                                img={doula?.picture?.uri}
                                onClick={() => nav(`/home/doula-profile/${doula?.id}`)}
                            />
                        ))}
                        {doualaData.length === 0 && [1,2].map((index) => (
                            <DoulasCard
                                key={index}
                                title={'####'}
                                subTitle={'###'}
                                rateStar={0}
                                img={'###'}
                                onClick={() => nav(``)}
                            />
                        ))}
                    </div>
                </Scrollbar>

                <div className="mt-4">
                    <p className="text-md font-normal italic leading-5 text-gray-400">We also recommend</p>
                    <div className="gap-4 flex flex-col my-5 px-2 overflow-x-auto">
                        {doualaData.map((doula, index) => (
                            <ComponentCard
                                key={index}
                                title={doula?.user?.fullName}
                                subTitle={doula?.title}
                                showRateStar
                                rateStar={doula?.starAvg}
                                img={doula?.picture?.uri}
                                imgStyle="w-15 h-15"
                                iconStyle="rounded-xl"
                                onClick={() => nav(`/home/doula-profile/${doula?.id}`)}
                            />
                        ))}
                        {doualaData.length === 0 && [1,2,3].map((index) => (
                            <ComponentCard
                                key={index}
                                title={'####'}
                                subTitle={'####'}
                                showRateStar
                                rateStar={0}
                                img={'https://placehold.co/50'}
                                iconStyle="rounded-xl"
                                onClick={() => nav(``)}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </>)
}