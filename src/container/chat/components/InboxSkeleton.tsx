import { Icons } from "@/components/common/Icons"
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard"
import { useAuthen } from "@/context/AuthContext"
import { FooterClient, FooterDoula } from "@/layout/FooterLayout"
import Header from "@/layout/HeaderLayout"
import { useState } from "react"

const TABS = ['Chat', 'Inbox']
export default function InboxSkeleton() {
    const { role } = useAuthen()
    const [content, setContent] = useState('Chat')
    return (<>
        <div className="h-screen bg-white">
            <Header title="Messages" iconR1={<Icons.addIcon />} />
            <div className="relative border-b border-gray-200 mb-4">
                <div className="flex">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setContent(tab)}
                            className={`flex-1 pb-3 text-center capitalize font-medium transition
                            ${content === tab ? 'text-black font-serif' : 'text-gray-400 font-serif'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div
                    className="absolute bottom-0 left-0 h-0.5 bg-violet-500 transition-all duration-300"
                    style={{
                        width: '50%',
                        transform: content === 'Chat'
                            ? 'translateX(0%)'
                            : 'translateX(100%)'
                    }}
                />
            </div>
            <div className="flex flex-col gap-4 px-2">
                {[1, 2, 3].map((e) => (
                    <ComponentSkeletonCard key={e} />
                ))}
            </div>
        </div>
        {role === 'doula' ? <FooterDoula /> : <FooterClient />}

    </>)

}