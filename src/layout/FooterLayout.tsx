import { Icons } from "@/components/common/Icons";
import { useNavigate, useLocation } from "react-router";

const FOOTER_CONSTANTS_CLIENT = [
    { id: 1, title: 'Home', icon: <Icons.homeIcon />, href: '/home' },
    { id: 2, title: 'My Care', icon: <Icons.parkIcon />, href: '/home/care' },
    { id: 3, title: 'Message', icon: <Icons.messageIcon />, href: '/home/message' },
    { id: 4, title: 'Setting', icon: <Icons.settingIcon />, href: '/home/settings' },
]

const FOOTER_CONSTANTS_DOULA = [
    { id: 1, title: 'Home', icon: <Icons.homeIcon />, href: '/home' },
    { id: 2, title: 'My Care', icon: <Icons.parkIcon />, href: '/home/care' },
    { id: 3, title: 'Calender', icon: <Icons.calendarIcon />, href: '/home/calender' },
    { id: 4, title: 'Message', icon: <Icons.messageIcon />, href: '/home/message' },
    { id: 5, title: 'Setting', icon: <Icons.settingIcon />, href: '/home/settings' }
]

export const FooterClient = () => {
    const nav = useNavigate()
    const { pathname } = useLocation()

    return (
        <footer className="min-h-20 z-20 sticky bottom-0 bg-white py-3 px-10 flex flex-row justify-between items-center gap-2">
            {FOOTER_CONSTANTS_CLIENT.map((i) => {
                const isActive = pathname === i.href

                return (
                    <div
                        key={i.id}
                        onClick={() => nav(i.href)}
                        className={`rounded p-2 cursor-pointer transition 
                            ${isActive ? 'bg-violet-500 text-white' : 'hover:bg-violet-400'}
                        `}
                    >
                        {i.icon}
                    </div>
                )
            })}
        </footer>
    )
}

export const FooterDoula = () => {
    const nav = useNavigate()
    const { pathname } = useLocation()
    return (
        <footer className="min-h-20 z-20 bg-white py-3 px-4 flex flex-row justify-between items-center gap-2">
            {FOOTER_CONSTANTS_DOULA.map((i) => {
                const isActive = pathname === i.href

                return (
                    <div
                        key={i.id}
                        onClick={() => nav(i.href)}
                        className={`rounded p-2 cursor-pointer transition 
                            ${isActive ? 'bg-violet-500 text-white' : 'hover:bg-violet-400'}
                        `}
                    >
                        {i.icon}
                    </div>
                )
            })}
        </footer>
    )
}