import { Icons } from "@/components/common/Icons";
import { useState } from "react";
import { useNavigate } from "react-router";
import SectionDoulaProfile from "../components/SectionDoulaProfile";
import SectionDoulaPackage from "../components/SectionDoulaPackage";
import SectionDoulaReview from "../components/SectionDoulaReview";

const TABS = [
    { id: 1, title: 'Profile' },
    { id: 2, title: 'Package' },
    { id: 3, title: 'Review' },
]

export default function DoulaProfileContainer() {
    const nav = useNavigate()
    const [content, setContent] = useState('Profile')

    return (<>
        <div className="h-screen bg-white overflow-y-auto">
            <div className="h-40 bg-blue-400 z-10">
                <button type="button" className="relative p-2 w-fit bg-white rounded-full mx-5 top-8 cursor-pointer hover:bg-violet-100" onClick={() => nav(-1)}>
                    <Icons.arrowLeftIcon />
                </button>
            </div>
            <div className="h-screen bg-white px-2">
                <div className="relative z-20 bottom-8 ml-2">
                    <img src='https://i.pravatar.cc/150?img=11' className="w-19 h-19 rounded-3xl border-white border-3" />
                </div>
                <div className="flex flex-row justify-between mx-2">
                    <div className="font-serif">
                        <p className="font-bold text-xl">Nellie King</p>
                        <p className="text-gray-500 text-sm">Childbirth professional</p>
                    </div>
                    <button className="w-fit px-5 bg-blue-700 rounded-3xl">
                        <p className="font-serif text-white">Chat</p>
                    </button>
                </div>
                <div className="relative border-b my-4">
                    <div className="flex">
                        {TABS.map((tab, index) => (
                            <>
                                <button
                                    key={index}
                                    onClick={() => setContent(tab.title)}
                                    className={`flex-1 pb-3 text-center capitalize font-medium transition
                                ${content === tab.title ? 'text-black-500 font-serif' : 'text-black font-serif'}`}>
                                    {tab.title}
                                </button>
                            </>
                        ))}
                    </div>

                    <div
                        className="absolute bottom-0 left-0 h-0.5 bg-violet-500 transition-all duration-300"
                        style={{
                            width: '33%',
                            transform:
                                content === 'Profile'
                                    ? 'translateX(0%)'
                                    : content === 'Package'
                                        ? 'translateX(100%)'
                                        : 'translateX(200%)'
                        }}
                    />
                </div>
                <div className="px-2">
                    <div className="overflow-y-auto overflow-x-hidden">
                        {content === 'Profile' && <SectionDoulaProfile />}
                        {content === 'Package' && <SectionDoulaPackage />}
                        {content === 'Review' && <SectionDoulaReview />}
                    </div>
                </div>
            </div>
        </div>
    </>)
}