import type React from "react";
import Header from "@/layout/HeaderLayout";
import { Icons } from "@/components/common/Icons";
import { useAuthen } from "@/context/AuthContext";
import { FooterClient, FooterDoula } from "@/layout/FooterLayout";

export default function HomeContainer({ children }: React.PropsWithChildren) {
    const { role } = useAuthen()
    return (
        <>
            <Header title="NurtureWave" iconR1={<Icons.userIcon />} />
            <div className="h-screen z-0 bg-white px-2">
                {children}
            </div>
            {role === 'DOULAS' ? <FooterDoula /> : <FooterClient />}
        </>
    )
}