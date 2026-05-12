import ComponentCard from "@/components/shared/ComponentCard"
import useDoula from "../hook/useDoula"
import { Icons } from "@/components/common/Icons"
import { useNavigate } from "react-router"

export default function SectionDoulaPackage({ id }: { id: string }) {
    const { useGetDoulaIdPackage } = useDoula()
    const { data: doulaPackage, loading: loadingDoulaPackage } = useGetDoulaIdPackage(id ?? '')
    const nav = useNavigate()

    if (loadingDoulaPackage) {
        return <Icons.buttonIcon />
    }

    if(!doulaPackage){
        return 
    }

    return (<>
        <div className="gap-5 flex flex-col">
            {doulaPackage?.map((e, index) => (
                <div className="border-b-gray-400 border-b">
                    <ComponentCard
                        key={index}
                        title={e.name}
                        subTitle={e.description}
                        img={e.picture?.uri}
                        imgStyle="w-15 h-15 bg-gray-400"
                        avatarStyle="rounded-xl"
                        showExpandRight
                        onClick={() => nav(`/home/doula-profile/package/${e.id}`)}
                    />
                </div>
            ))}
        </div>
        {!doulaPackage && <div className="px-4 mt-1 font-serif">
            <p className="text-sm text-gray-500 text-center">This person don't have any package!!</p>
        </div>}
    </>)
}