import { Icons } from "@/components/common/Icons";
import { InputField } from "@/components/common/InputField";
import Header from "@/layout/HeaderLayout";
import { useParams } from "react-router";

const MESSAGES = [
    { avatar: 'https://i.pravatar.cc/150?img=19', title: 'Nellie King', text: 'I can come visit your home at ...', time: '25m' },
    { avatar: 'https://i.pravatar.cc/150?img=50', title: 'Pauline Hand', text: 'I can come visit your home at ...', time: '5m' },
    { avatar: 'https://i.pravatar.cc/150?img=9', title: 'Carlos Pfannerstill', text: 'I can come visit your home at ...', time: '30m' },
]

export default function ChatDetailContainer({ children }: React.PropsWithChildren) {
    const params = useParams()
    return (<>
        <div className="h-screen bg-white">
            <Header title={` ${MESSAGES.find((e, s) => s.toString() === params.id)?.title}`} showBack titleAlign="center" />
            {children}
        </div>
        <div className="min-h-20 z-20 bg-white py-3 px-2 border-t border-t-gray-200 flex flex-row justify-around items-center gap-3">
            <Icons.imageIcon />
            <div className="w-full rounded-2xl p-2 text-wrap">
                <InputField />
            </div>
            <div className="w-fit p-2 rounded-xl bg-violet-800">
                 <Icons.sendIcon />
            </div>
           
        </div>
    </>)
}