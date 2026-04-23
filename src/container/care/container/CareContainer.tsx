import { Icons } from "@/components/common/Icons";
import { useAuthen } from "@/context/AuthContext";
import { FooterClient, FooterDoula } from "@/layout/FooterLayout";
import Header from "@/layout/HeaderLayout";
import { useNavigate } from "react-router";

export default function CareContainer({ children }: React.PropsWithChildren) {
    const { role } = useAuthen()
    const nav = useNavigate()
    
    return (<>
        <Header
            title={role === 'doula' ? 'Client Care' : 'My Care'}
            iconR1={role === 'doula' ? " " : <Icons.calendarIcon />}
            onClickIconR1={() => nav('/home/care/appointment')}
        />
        <div className="h-screen bg-white overflow-x-auto">    
            {children}
        </div>
        {role === 'doula' ? <FooterDoula /> : <FooterClient />}
    </>)
}