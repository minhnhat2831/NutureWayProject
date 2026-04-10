import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import { FooterClient } from "@/layout/FooterLayout";
import Header from "@/layout/HeaderLayout";
import { useNavigate } from "react-router";

const SETTINGS = [
    { title : 'Account setting', subTitle : 'Personal details and more', icon : <Icons.userIcon />, path : '/home/settings/account-setting'},
    { title : 'Privacy & security', subTitle : 'Change password, login and more', icon : <Icons.securityIcon />, path : '/home/settings/change-password'},
    { title : 'Notification & communication', subTitle : 'When and how we should notify you', icon : <Icons.bellIcon />, path : '/home/settings/change-notification'},
    { title : 'Help Center', subTitle : 'Access help documents of NurtureWave', icon : <Icons.helpIcon />, path : '/home/settings/help-center'},
    { title : 'About', subTitle : 'NurtureWave build and assets used', icon : <Icons.infoIcon />, path : '/home/settings/info-about'},
]

export default function SettingContainer(){
    const nav = useNavigate()
    return(<>
        <div className="h-screen bg-white">
            <Header title="Settings" />
            <div className="flex flex-col gap-2 p-4">
                {SETTINGS.map((set, index) => (
                    <ComponentCard 
                        key={index}
                        iconL1={set.icon}
                        title={set.title}
                        subTitle={set.subTitle}
                        showExpandRight
                        onClick={() => nav(set.path)}
                    />
                ))}
            </div>
        </div>
        <FooterClient />
    </>)
}