import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import LoginLayout from "../components/LoginLayout"
import { useState } from "react"
import { Icons } from "@/components/common/Icons"
import { toast } from "react-toastify"

export default function SelectIdentityPage() {
    const method = useForm()
    const nav = useNavigate()
    const [select, setSelect] = useState('')

    const handleSelect = () => {
        if(select === ''){
            toast.error("Please select one to continue!")
        }

        if(select === 'client'){
            toast.success('Success')
        }else if(select === 'doula'){
            nav('/about-you')
        }
    }

    return (<>
        <LoginLayout
            method={method}
            title='Please select from below'
            subTitle="Please choose from below your user identity"
            children={<>
                <div className={select === "client" ? `bg-blue-100 border-2 border-blue-600 rounded-xl px-3 py-5` : `w-full h-auto bg-gray-100 rounded-xl px-3 py-5`}>
                    <button type="button" className='flex flex-col text-left gap-2 cursor-pointer' onClick={() => setSelect('client')}>
                        <Icons.userIcon />
                        <p className="font-serif text-lg">I need doula services</p>
                        <p className="font-serif text-sm text-gray-500">I am a client</p>
                    </button>

                </div>
                <div className={select === "doula" ? `bg-blue-100 border-2 border-blue-600 rounded-xl px-3 py-5` : `w-full h-auto bg-gray-100 rounded-xl px-3 py-5`}>
                    <button type="button" className="flex flex-col text-left gap-2 cursor-pointer" onClick={() => setSelect('doula')}>
                        <Icons.parkIcon />
                        <p className="font-serif text-lg">I provide doula services</p>
                        <p className="font-serif text-sm text-gray-500">I am a doula</p>
                    </button>

                </div>
            </>}
            buttonName='Next'
            onClick={() => handleSelect()}
        >
        </LoginLayout>

    </>)
}