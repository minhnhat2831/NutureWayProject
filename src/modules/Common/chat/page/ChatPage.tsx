import { Icons } from "@/components/common/Icons"
import ComponentCard from "@/components/shared/ComponentCard"
import { FooterClient } from "@/layout/FooterLayout"
import Header from "@/layout/HeaderLayout"
import { useState } from "react"

const MESSAGES = [
    { avatar : 'https://i.pravatar.cc/150?img=19', title : 'Pauline Hand', text : 'I can come visit your home at ...', time : '25m'},
    { avatar : 'https://i.pravatar.cc/150?img=50', title : 'Pauline Hand', text : 'I can come visit your home at ...', time : '5m'},
    { avatar : 'https://i.pravatar.cc/150?img=9', title : 'Pauline Hand', text : 'I can come visit your home at ...', time : '30m'},
]

const INBOX = [
    { avatar : 'https://i.pravatar.cc/150?img=10', title : 'Pauline Hand requested your service', text : 'Tap to view and respond', haveRequest : true},
    { avatar : 'https://i.pravatar.cc/150?img=25', title : 'Pauline Hand requested your service', text : 'Tap to view and respond', haveRequest : true},
]
const TABS = ['Chat', 'Inbox']

export default function ChatPage() {
    const [content, setContent] = useState('Chat')
    return (<>
        <div className="h-screen bg-white">
            <Header title="Messages" iconR1={<Icons.addIcon />} />
            <div className="relative border-b mb-4">
                <div className="flex">
                    {TABS.map((tab) => (
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
                        transform: content === 'Chat'
                            ? 'translateX(0%)'
                            : 'translateX(100%)'
                    }}
                />
            </div>

            {content === 'Chat' && <>
                <div className="flex flex-col gap-4 px-2">
                    {MESSAGES.map((care, index) => (
                        <ComponentCard
                            key={index}
                            avatar={care.avatar}
                            title={care.title}
                            subTitle={care.text}
                            showTextRight
                            textRight={care.time}
                            onClick={() => { }}
                        />
                    ))}
                </div>
            </>}
            {content === 'Inbox' && <>
                <div className="flex flex-col gap-4 px-2">
                    {INBOX.map((care, index) => (
                        <ComponentCard
                            key={index}
                            avatar={care.avatar}
                            title={care.title}
                            subTitle={care.text}
                            haveRequest={care.haveRequest}
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