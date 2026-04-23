import CareContainer from "@/container/care/container/CareContainer";
import MyClientContainer from "@/container/care/container/tabs/MyClientContainer";
import MyPackageContainer from "@/container/care/container/tabs/MyPackageContainer";
import OnGoingContainer from "@/container/care/container/tabs/OnGoingContainer";
import RequestContainer from "@/container/care/container/tabs/RequestContainer";
import { useAuthen } from "@/context/AuthContext";
import { useEffect, useState } from "react";

const TABS_CLIENT = ['onGoing', 'requested']
const TABS_DOULA = ['MyPackages', 'MyClients']

export default function CarePage() {
    const { role } = useAuthen()
    const tabs = role === 'doula' ? TABS_DOULA : TABS_CLIENT
    const [content, setContent] = useState(tabs[0])
    const activeIndex = tabs.indexOf(content)

    useEffect(() => {
        setContent(tabs[0])
    }, [role])
    
    return <CareContainer>
        <div className="relative border-b mb-4">
            <div className="flex">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setContent(tab)}
                        className={`flex-1 pb-3 text-center capitalize font-medium transition
                ${content === tab ? 'text-violet-500 font-serif' : 'text-gray-400 font-serif'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div
                className="absolute bottom-0 left-0 h-0.5 bg-violet-500 transition-all duration-300"
                style={{
                    width: `${100 / tabs.length}%`,
                    transform: `translateX(${activeIndex * 100}%)`
                }}
            />
        </div>
        {role === 'user' && <>
            {content === 'onGoing' && <OnGoingContainer />}
            {content === 'requested' && <RequestContainer />}
        </>}

        {role === 'doula' && <>
            {content === 'MyPackages' && <MyPackageContainer />}
            {content === 'MyClients' && <MyClientContainer />}
        </>}
    </CareContainer>
}