import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import DetailContainer from "@/container/detail/container/DetailContainer";
import { useNavigate } from "react-router";

const CARE_DETAIL = [
    { icon: <Icons.userIcon />, title: 'Doule profile', path: '/home/doula-profile/0' },
    { icon: <Icons.parkIcon />, title: 'Care package', path: '/home/detail/package-detail' },
    { icon: <Icons.imageIcon />, title: 'Images & videos', path: '/home/detail/imageVideo' },
    { icon: <Icons.documentsIcon />, title: 'Documents', path: '/home/detail/documents' },
]

const YOUR_CARE = [
    { icon: <Icons.userIcon />, title: 'Medication', path: '/home/detail/medication' },
    { icon: <Icons.medicationNoteIcons />, title: 'Notes', path: '/home/detail/notes' },
    { icon: <Icons.folkIcon />, title: 'Nutrition', path: '/home/detail/nutrition' },
    { icon: <Icons.folkIcon />, title: 'Manage Service', path: '/home/detail/manageService' },
]
export default function DetailPage() {
    const nav = useNavigate()
    return <DetailContainer>
        {CARE_DETAIL.map((e, index) =>
            <div className="flex flex-col mb-4">
                <ComponentCard
                    key={index}
                    containerStyle="bg-white"
                    iconL1={e.icon}
                    title={e.title}
                    onClick={() => nav(e.path)}
                    showExpandRight />
            </div>
        )}

        <p className="text-gray-500 font-serif">Your care</p>
        {YOUR_CARE.map((e, index) =>
            <div className="flex flex-col mb-4">
                <ComponentCard
                    key={index}
                    containerStyle="bg-white"
                    iconL1={e.icon}
                    title={e.title}
                    onClick={() => nav(`${e.path}/${0}`)}
                    showExpandRight />
            </div>
        )}
    </DetailContainer>
}