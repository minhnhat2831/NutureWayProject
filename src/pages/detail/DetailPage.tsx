import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import useCare from "@/container/care/hook/useCare";
import DetailContainer from "@/container/detail/container/DetailContainer";
import { useLocation, useNavigate, useParams } from "react-router";

export default function DetailPage() {
    const nav = useNavigate()
    const { id } = useParams<{ id: string }>()

    const from = useLocation()
    const isDoula = from.pathname.includes("/doula");

    const { useGetCareById } = useCare()
    const { data } = useGetCareById(id ?? '')

    const CARE_DETAIL = [
        { icon: <Icons.userIcon />, title: isDoula ? 'Doule profile' : 'Client profile', path: isDoula ? `/home/doula-profile/${data?.doulaId}` : `/home/client-profile/${id}` },
        { icon: <Icons.parkIcon />, title: 'Care package', path: `/home/detail/package-detail/${data?.doulaPackageId}` },
        { icon: <Icons.imageIcon />, title: 'Images & videos', path: '/home/detail/imageVideo' },
        { icon: <Icons.documentsIcon />, title: 'Documents', path: `/home/detail/documents/${id}` },
    ]

    const YOUR_CARE = [
        isDoula
            ? { icon: <Icons.userIcon />, title: 'Medication', path: `/home/detail/medication/${data?.id}` }
            : { icon: <Icons.calendarIcon />, title: 'Appointments', path: '/home/detail/appointments' },
        { icon: <Icons.medicationNoteIcons />, title: 'Notes', path: '/home/detail/notes' },
        { icon: <Icons.folkIcon />, title: 'Nutrition', path: '/home/detail/nutrition' },
        { icon: <Icons.folkIcon />, title: 'Manage Service', path: '/home/detail/manageService' },
    ]
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
                    onClick={() => nav(e.path)}
                    showExpandRight />
            </div>
        )}
    </DetailContainer>
}