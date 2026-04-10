import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";
import { useLocation, useNavigate } from "react-router";

const CARE_DETAIL = [
    { icon: <Icons.userIcon />, title: 'Doule profile', path: '/home/doula-profile/0' },
    { icon: <Icons.parkIcon />, title: 'Care package', path: '/home/care/care-package' },
    { icon: <Icons.imageIcon />, title: 'Images & videos', path: '/home/care/imageVideo' },
    { icon: <Icons.documentsIcon />, title: 'Documents', path: '/home/care/documents' },
]

const YOUR_CARE = [
    { icon: <Icons.userIcon />, title: 'Medication', path: '/home/care/medication' },
    { icon: <Icons.medicationNoteIcons />, title: 'Notes', path: '/home/care/notes' },
    { icon: <Icons.folkIcon />, title: 'Nutrition', path: '/home/care/nutrition' },
    { icon: <Icons.folkIcon />, title: 'Manage Service', path: '/home/care/manageService' },
]

export default function CareDetailContainer() {
    const data = useLocation()
    const title = data.state.title
    const subtitle = data.state.subTitle
    const nav = useNavigate()

    return (<>
        <div className="h-screen bg-[#f5f5f5] overflow-y-auto pb-10">
            <Header showBack />
            <div className="px-5">
                <div className="flex-row-reverse flex justify-between items-center py-5">
                    <img src="https://i.pravatar.cc/150?img=13" className="w-14 h-14 rounded-3xl" />
                    <div className="font-serif leading-5">
                        <p className="font-semibold text-xl leading-6">{title}</p>
                        <p className="font-normal text-gray-500 text-sm leading-6">{subtitle}</p>
                    </div>
                </div>
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
            </div>
        </div>
    </>)
}