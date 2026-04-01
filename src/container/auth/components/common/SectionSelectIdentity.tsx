import { Icons } from "@/components/common/Icons";
import { useOnboardingStore } from "../../store/useOnboardingStore";

export default function SectionSelectIdentity() {
    const { select, setSelect } = useOnboardingStore()

    return (<>
        <div className={select === "client" ? `bg-blue-100 border-2 border-blue-600 rounded-xl px-3 py-5` : `w-full h-auto bg-gray-100 rounded-xl px-3 py-5`}>
            <button type="button" className='flex flex-col text-left gap-2 w-full cursor-pointer' onClick={() => setSelect('client')}>
                <Icons.userIcon />
                <p className="font-serif text-lg">I need doula services</p>
                <p className="font-serif text-sm text-gray-500">I am a client</p>
            </button>

        </div>
        <div className={select === "doula" ? `bg-blue-100 border-2 border-blue-600 rounded-xl px-3 py-5` : `w-full h-auto bg-gray-100 rounded-xl px-3 py-5`}>
            <button type="button" className="flex flex-col text-left gap-2 w-full cursor-pointer" onClick={() => setSelect('doula')}>
                <Icons.parkIcon />
                <p className="font-serif text-lg">I provide doula services</p>
                <p className="font-serif text-sm text-gray-500">I am a doula</p>
            </button>
        </div>
    </>)
}