import ComponentCard from "@/components/shared/ComponentCard"
import { useNavigate } from "react-router"

const CARES_REQUESTED = [
    { avatar: 'https://i.pravatar.cc/150?img=19', title: 'Nellie King', subTitle: 'Comprehesive Birth Package' },
    { avatar: 'https://i.pravatar.cc/150?img=50', title: 'Claude Davis', subTitle: 'Comprehesive Birth Package' },
]

export default function RequestContainer() {
    const nav = useNavigate()
    return (<>
        <div className="flex flex-col gap-4 px-2">
            {CARES_REQUESTED.map((care, index) => (
                <ComponentCard
                    key={index}
                    avatar={care.avatar}
                    title={care.title}
                    subTitle={care.subTitle}
                    showExpandRight
                    onClick={() => nav(`/home/care/package-detail/${index}`)}
                />
            ))}
        </div>
    </>)
}