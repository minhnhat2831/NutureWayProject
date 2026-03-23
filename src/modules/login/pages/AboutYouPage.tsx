import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import LoginLayout from "../components/LoginLayout"
import { useState } from "react"
import { Icons } from "@/components/common/Icons"
import { ButtonField } from "@/components/common/ButtonField"
import { InputForm } from "@/components/form/InputForm"

export default function AboutYouPage() {
    const method = useForm()
    const nav = useNavigate()
    const [open, setOpen] = useState(true)



    return (<>
        {open && <>
            <div className="h-screen flex justify-start flex-col items-center bg-[#f0efef]">
                <div className="w-full h-1/3 px-2 flex-col flex justify-start py-8 gap-5 bg-[url(/bg-doula.jpg)] bg-cover bg-center">
                    <div className="flex flex-row justify-between items-center">
                        <button onClick={() => setOpen(false)}><Icons.closeButtonIcon /></button>
                        <p className="m-auto font-serif text-white">Subscribe</p>
                    </div>
                    <div className="px-2">
                        <p className="text-gray-400">Subscribe to a package</p>
                        <p className="font-bold w-50 text-white">Ready to start your doula journey with us?</p>
                    </div>
                </div>
                <div className="w-full h-2/3 px-4 flex-col flex justify-start py-8">
                    <div className="w-30 bg-white rounded-md text-center p-2">
                        <p>Premium</p>
                    </div>
                    <p className="mt-5 font-serif">Top features</p>

                    <div className="w-full bg-white rounded-md text-center p-2">
                        <p className="text-left ml-5">$ Pricing</p>
                        <p>$40 per month for Monthly charge</p>
                        <p>$35 per month for Half-Year charge</p>
                        <p>$30 per month for Annually charge</p>
                    </div>

                    <div className="w-full bg-white rounded-md text-balance p-2 mt-5">
                        <p className="flex items-center gap-5"><Icons.checkIcon />Unlimited access</p>
                        <p className="flex items-center gap-5"><Icons.checkIcon />Advertise your services and packages</p>
                        <p className="flex items-center gap-5"><Icons.checkIcon />Booking appointments</p>
                        <p className="flex items-center gap-5"><Icons.checkIcon />Manage clients and notes</p>
                    </div>
                </div>

                <div className="mt-auto w-full mb-3 px-4">
                    <ButtonField
                        type="button"
                        fullWidth
                        onClick={() => setOpen(false)}
                    >
                        Next
                    </ButtonField>
                </div>
            </div>
        </>}

        {open === false && <>
            <LoginLayout
                method={method}
                title='About you'
                children={<>
                    <div className="w-full h-auto bg-white border border-gray-300 rounded-xl px-3 py-5">
                        <p className="text-2xl font-serif">Your title</p>
                        <p className="text-sm text-gray-400 font-serif mb-2">Introduce your role in a short sentence</p>
                        <InputForm 
                            name="title"
                            placeholder="Short introdution"
                        />
                    </div>

                    <div className="w-full h-auto bg-white border border-gray-300  rounded-xl px-3 py-5">
                        <p className="text-2xl font-serif">Your service</p>
                        <p className="text-sm text-gray-400 font-serif mb-2">Categorise your services in a few words, like prenatalm labour, postnatal,etc. This will help clients find you more efficiently</p>
                        <div className="flex flex-row gap-2">
                            <p className="bg-gray-300 rounded-full p-2 cursor-default">Prenatal</p>
                            <p className="bg-gray-300 rounded-full p-2 cursor-default">Postnatal</p>
                            <p className="bg-gray-300 rounded-full p-2 cursor-pointer flex items-center"><Icons.addIcon /> Add</p>
                        </div>
                    </div>

                    <div className="w-full h-auto bg-white border border-gray-300  rounded-xl px-3 py-5">
                        <p className="text-2xl font-serif">Pictures of your service</p>
            
                        <div className="flex flex-row gap-2">
                            <div className="w-20 h-20 border border-gray-300">
                                <img src={'https://placehold.co/600x600/png'}/>
                            </div>
                            <div className="w-20 h-20 border border-gray-300">
                                <img src={'https://placehold.co/600x600/png'}/>
                            </div>
                            <div className="w-20 h-20 border border-gray-300">
                                <p className="h-20 w-20 flex justify-center items-center"><Icons.addIcon /></p>
                            </div>
                        </div>
                    </div>
                </>}
                buttonName='Next'
                onClick={() => nav('/payment')}
            >
            </LoginLayout>
        </>}



    </>)
}