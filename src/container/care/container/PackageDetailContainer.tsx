import { ButtonField } from "@/components/common/ButtonField";
import { Icons } from "@/components/common/Icons";
import { InputField } from "@/components/common/InputField";
import Popup from "@/components/common/Popup";
import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";
import { useState } from "react";

const EXPECT = [
    { title: 'Doula reviews your request', subTitle: 'Doula will review your request and assess their suitability to meet your needs.', icon: <Icons.securityIcon /> },
    { title: 'Obtain more information', subTitle: 'Doula will contact you by message if they need more information.', icon: <Icons.messageIcon /> },
    { title: 'Doula approves your request', subTitle: 'If eligible, the doula will approve you as a client and notify us.', icon: <Icons.checkIcon /> },
]

export default function PackageDetailContainer() {
    const [open, setOpen] = useState(false)
    return (<>
        <div className="h-screen bg-white overflow-y-auto">
            <Header
                showBack
                title="Package Detail"
                titleAlign="center"
            />
            <img src='https://placehold.co/393x184' alt="picture"></img>
            <div className="px-4 my-8 font-serif">
                <h2 className="font-semibold text-lg leading-6">Comprehensice Birth Package</h2>
                <h3 className="font-normal text-gray-400 text-sm leading-5">In-depth birth plan consilation</h3>

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <label className="font-bold text-sm leading-5">Pricing</label>
                    <p className="text-sm text-gray-600 my-4 leading-5">$99.99 per week. Client are billed monthly</p>
                </div>

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <label className="font-bold text-sm leading-5">What's included</label>
                    <p className="text-sm text-gray-600 my-4 leading-5">1. Prenatal Care and Education : regular check-ups, ultrasounds and prenatal classes that edicate about pregnancy , labor, and delivery</p>
                    <p className="text-sm text-gray-600 my-4 leading-5">2. Labor and Delivery Support: This can include the services of a midwife or doula, who provides emotional and physical support during labor and delivery.</p>
                    <p className="text-sm text-gray-600 my-4 leading-5">3. Newborn Care Essentials: Supplies such as diapers, wipes, baby clothing, and swaddling blankets</p>
                </div>

                <ButtonField
                    fullWidth
                    onClick={() => setOpen(true)}
                    type="button"
                >
                    Request this package
                </ButtonField>
            </div>

            <Popup open={open} onOpenChange={setOpen}>
                <div className={`px-4 absolute w-full rounded-t-2xl bg-white`}>
                    <div className=" bg-white py-4 flex justify-between">
                        <p className="text-lg leading-6 font-normal">Send request</p>
                        <button type="button" className="cursor-pointer hover:bg-gray-100" onClick={() => setOpen(!open)}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <img src={'https://i.pravatar.cc/150?img=18'} alt="avarta" width={70} height={70} className="rounded-xl" />
                        <div>
                            <p className="font-semibold text-lg leading-6">Nellie King</p>
                            <p className="font-normal text-sm leading-5 text-gray-400">Childbirth professional</p>
                        </div>
                    </div>
                    <div className="w-full rounded-2xl p-4 gap-2 bg-gray-200 my-4">
                        <label className="font-medium text-sm leading-5">What to include in your message?</label>
                        <p className="font-serif text-sm leading-5">Tell us a bit about yourself and your pregnancy, location.</p>
                        <p className="font-serif text-sm leading-5">Expected Date of birth, upcoming appointments</p>
                        <p className="font-serif text-sm leading-5">And any special requests you may have.</p>
                    </div>

                    <InputField
                        insideLabel="detail of your request"
                        placeholder="Input"
                    />

                    <p className="font-serif italic text-sm leading-5 text-gray-400 my-4">What to expect next</p>

                    {EXPECT.map((e, index) => (
                        <ComponentCard
                            key={index}
                            containerStyle="hover:bg-white hover:shadow-none"
                            title={e.title}
                            subTitle={e.subTitle}
                            iconL1={e.icon}
                            iconStyle="bg-white"
                        />
                    ))}
                    <ButtonField
                        fullWidth
                        type="button"
                    >Send</ButtonField>

                </div>
            </Popup>
        </div>
    </>)
}