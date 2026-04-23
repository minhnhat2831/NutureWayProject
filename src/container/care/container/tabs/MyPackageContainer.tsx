import ComponentCard from "@/components/shared/ComponentCard";
import usePackage from "../../hook/usePackage";
import { useNavigate } from "react-router";
import { Icons } from "@/components/common/Icons";
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard";

export default function MyPackageContainer() {
    const { useGetMyPackage } = usePackage()
    const { data: dataPackage, loading: loadingMyPackage } = useGetMyPackage()
    const nav = useNavigate()

    if (loadingMyPackage) {
        return (<>
            <div className="flex flex-col gap-4 px-2">
                {[1, 2, 3].map((e) => (
                    <ComponentSkeletonCard key={e} />
                ))}
            </div>
        </>)
    }

    return (<>
        <div className="flex flex-col gap-4 px-2">
            {dataPackage.map((item, index) => (
                <ComponentCard
                    key={index}
                    img={item?.picture?.uri}
                    imgStyle="w-15 h-15"
                    title={item?.name}
                    subTitle={item?.shortDescription}
                    showExpandRight
                    onClick={() => nav(`/home/care/package-detail/${item?.id}`)}
                />
            ))}
            <ComponentCard
                iconStyle="rounded-xl bg-white border-gray-200 border"
                iconL1={<Icons.addIcon />}
                title="Add a package listing"
                onClick={() => nav('/home/package')}
            />
        </div>
    </>)
}