import { Icons } from "@/components/common/Icons";
import useDoula from "@/container/doulas/hook/useDoula";
import Header from "@/layout/HeaderLayout";
import { useParams } from "react-router";
import PackageDetailSkeleton from '../../components/PackageDetailSkeleton'

export default function PackageDetailContainer() {
    const { id } = useParams<{ id: string }>()
    const { useGetDoulaPackageById } = useDoula()
    const { data, loading } = useGetDoulaPackageById(id ?? '')

    if (loading) {
        return <PackageDetailSkeleton />
    }

    return (<>
        <Header
            showBack
            title="Package Detail"
            titleAlign="center"
            iconR1={<Icons.editPenIcon />}
        />
        {data && <>
            <div className="h-screen bg-white overflow-y-auto">
                <img src={data?.picture?.uri ?? 'https://placehold.co/400x188'} alt="picture" className="w-100 h-47 border-b"></img>

                <div className="px-4 my-4 font-serif">
                    <h2 className="font-semibold text-lg leading-6">{data?.name}</h2>
                    <h3 className="font-normal text-gray-400 text-sm leading-5">{data?.shortDescription}</h3>

                    <div className="border-gray-300 border rounded-xl p-4 my-4">
                        <label className="font-medium text-md leading-5">Pricing</label>
                        <p className="text-sm text-gray-600 my-4 leading-5">{data?.price}</p>
                    </div>

                    <div className="border-gray-300 border rounded-xl p-4 my-4">
                        <label className="font-medium text-md leading-5">Qualifications</label>
                        <div className="px-4">
                            {data?.qualifications.map((e) => (
                                <p className="text-sm text-gray-600 my-4 leading-5 list-item">{e}</p>
                            ))}
                            {data?.qualifications.length < 1 && ['-'].map((e) => (
                                <p className="text-sm text-gray-600 my-4 leading-5 list-item">{e}</p>
                            ))}
                        </div>
                    </div>

                    <div className="border-gray-300 border rounded-xl p-4 my-4">
                        <label className="font-medium text-md leading-5">What's included</label>
                        <p className="text-sm text-gray-600 my-4 leading-5">{data?.description}</p>
                    </div>
                </div>
            </div>
        </>}

        {!data && <>
            <div className="h-screen bg-white">
                <div className="w-100 h-47 bg-[#cecece] flex justify-center items-center">
                    <p className="text-xl text-gray-500">Error 404</p>
                </div>

                <div className="px-4 mt-30 font-serif">
                    <p className="text-sm text-gray-500 text-center">No data available!</p>
                </div>
            </div>
        </>}
    </>)
}