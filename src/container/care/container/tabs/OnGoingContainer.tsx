import ComponentCard from "@/components/shared/ComponentCard"
import useCare from "../../hook/useCare"
import { useNavigate } from "react-router"

export default function OnGoingContainer() {
    const { useGetMycare } = useCare()
    const { data, loading: loadingMyCare } = useGetMycare()
    const nav = useNavigate()

    if(loadingMyCare){
        return
    }
    
    return (<>
        <div className="flex flex-col gap-4 px-2">
            {data.map((care, index) => (
                <ComponentCard
                    key={index}
                    avatar={care?.doula?.user?.picture}
                    title={care?.doula?.title}
                    subTitle={care?.doulaPackage?.name}
                    showExpandRight
                    onClick={() => nav(`/home/care/${care.id}`)}
                />
            ))}
            {data.length < 1 &&
                <div>
                    <p className="text-gray-400 font-serif text-center">You don't have any package yet!</p>
                </div>}
        </div>
    </>)
}