import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import { useAuthen } from "@/context/AuthContext";
import { FooterClient } from "@/layout/FooterLayout";
import Header from "@/layout/HeaderLayout";
import { useState } from "react";

const CARES_ONGOING = [
    { avatar: 'https://i.pravatar.cc/150?img=13', title: 'Nellie King', subTitle: 'Comprehesive Birth Package' },
    { avatar: 'https://i.pravatar.cc/150?img=15', title: 'Claude Davis', subTitle: 'Comprehesive Birth Package' },
    { avatar: 'https://i.pravatar.cc/150?img=12', title: 'Nellie King', subTitle: 'Comprehesive Birth Package' },
]

const CARES_REQUESTED = [
    { avatar: 'https://i.pravatar.cc/150?img=19', title: 'Nellie King', subTitle: 'Comprehesive Birth Package' },
    { avatar: 'https://i.pravatar.cc/150?img=50', title: 'Claude Davis', subTitle: 'Comprehesive Birth Package' },
]

const TABS_CLIENT = ['onGoing', 'requested']
const TABS_DOULA = ['My packages', 'My clients']

export default function CarePage() {
    const { role } = useAuthen()
    const [content, setContent] = useState('onGoing')
    return (<>
        <div className="h-screen bg-white">
            <Header title="My care" iconR1={<Icons.calendarIcon />} />
            <div className="relative border-b mb-4">
                <div className="flex">
                    {role === 'DOULAS' ? TABS_DOULA : TABS_CLIENT.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setContent(tab)}
                            className={`flex-1 pb-3 text-center capitalize font-medium transition
                    ${content === tab ? 'text-violet-500 font-serif' : 'text-gray-400 font-serif'}`}>
                            {tab}
                        </button>
                    ))}
                </div>

                <div
                    className="absolute bottom-0 left-0 h-0.5 bg-violet-500 transition-all duration-300"
                    style={{
                        width: '50%',
                        transform: content === 'onGoing'
                            ? 'translateX(0%)'
                            : 'translateX(100%)'
                    }}
                />
            </div>

            {content === 'onGoing' && <>
                <div className="flex flex-col gap-4 px-2">
                    {CARES_ONGOING.map((care, index) => (
                        <ComponentCard
                            key={index}
                            avatar={care.avatar}
                            title={care.title}
                            subTitle={care.subTitle}
                            showExpandRight
                            onClick={() => { }}
                        />
                    ))}
                </div>
            </>}
            {content === 'requested' && <>
                <div className="flex flex-col gap-4 px-2">
                    {CARES_REQUESTED.map((care, index) => (
                        <ComponentCard
                            key={index}
                            avatar={care.avatar}
                            title={care.title}
                            subTitle={care.subTitle}
                            showExpandRight
                            onClick={() => { }}
                        />
                    ))}
                </div>
            </>}
        </div>
        <FooterClient />
    </>)
}