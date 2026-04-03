import Scrollbar from "react-scrollbars-custom";
import type React from "react";
import CategoryContainer from "../categories/container/CategoryContainer";
import ArticleContainer from "../article/container/ArticleContainer";
import DoulaContainer from "../doulas/container/DoulaContainer";
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
                <Scrollbar style={{ width: '100%', height: '100%' }}>
                    <CategoryContainer />
                    <DoulaContainer />
                    <ArticleContainer />
                </Scrollbar>
            </div>
            {role === 'DOULAS' ? <FooterDoula /> : <FooterClient />}
        </>
    )
}