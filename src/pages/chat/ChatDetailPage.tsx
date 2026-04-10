import ChatDetailContainer from "@/container/chat/container/ChatDetailContainer";

export default function ChatDetailPage() {
    return <ChatDetailContainer>
        <div className="flex flex-row px-2 mt-3">
            <div className="ml-2 mt-1 text-right">
                <p className="rounded-2xl my-1 w-fit ml-auto bg-blue-500 p-3 text-white leading-5">Absolute! In which area that you need assistance with?</p>
                <p className="rounded-2xl my-1 w-fit ml-auto bg-blue-500 p-3 text-white leading-5">Antenatal or postnatal?</p>
                <p className="rounded-2xl my-1 w-fit ml-auto bg-blue-500 p-3 text-white leading-5">I can come visit your home during usual business hours</p>
                <p className="text-gray-400 w-fit ml-auto">9:40 PM</p>
            </div>
        </div>
        <div className="flex flex-row-reverse px-2 mt-3">
            <div className="ml-2">
                <p className="rounded-xl w-fit mr-auto bg-gray-100 p-3 mt-1">Absolute! In which area that you need assistance with?</p>
                <p className="rounded-xl w-fit mr-auto bg-gray-100 p-3 mt-1">Antenatal or postnatal?</p>
                <p className="rounded-xl w-fit mr-auto bg-gray-100 p-3 mt-1">I can come visit your home during usual business hours</p>
                <p className="text-gray-400">9:40 PM</p>
            </div>
            <img src={'https://i.pravatar.cc/150?img=10'} className={`rounded-full w-12 h-12 mt-auto`} />
        </div>
    </ChatDetailContainer>
}