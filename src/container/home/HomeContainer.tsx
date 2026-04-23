import type React from "react";
import Header from "@/layout/HeaderLayout";
import { useAuthen } from "@/context/AuthContext";
import { FooterClient, FooterDoula } from "@/layout/FooterLayout";
import { useState } from "react";
import Popup from "@/components/common/Popup";
import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";

export default function HomeContainer({ children }: React.PropsWithChildren) {
    const { role, user } = useAuthen()
    const [open, setOpen] = useState(false)
    return (
        <>
            <Header
                title="NurtureWave"
                iconR1={<><img src={user?.picture?.uri} className="w-8 h-8 rounded-full" /></>}
                onClickIconR1={() => setOpen(!open)} />
            <div className="flex flex-col h-screen">
                <div className="flex-1 overflow-hidden pb-10 px-2 bg-white">
                    {children}
                    <Popup
                        open={open}
                        onOpenChange={setOpen}
                        className={`absolute mt-5 bottom-0 z-50 rounded-t-2xl w-full flex flex-col h-auto bg-white shadow-xl focus:outline-none`}>
                        {role === 'user' &&
                            <>
                                <div className="flex flex-row justify-between items-center p-4">
                                    <p className="font-medium leading-5">{user?.fullName}</p>
                                    <button className="cursor-pointer" type="button" onClick={() => setOpen(!open)}><Icons.closeButtonIcon /></button>
                                </div>
                                <div className="p-4">
                                    <ComponentCard
                                        containerStyle="bg-[#ececec] mb-2"
                                        iconL1={<Icons.starNoColorIcon />}
                                        iconStyle="bg-white"
                                        title="Saved articles"
                                        showExpandRight
                                    />
                                    <ComponentCard
                                        containerStyle="bg-[#ececec] mb-2"
                                        iconL1={<Icons.switchChangeIcon />}
                                        iconStyle="bg-white"
                                        title="Switch to doula's version"
                                        showExpandRight
                                    />
                                </div>
                            </>}
                            {role === 'doula' &&
                            <>
                                <div className="flex flex-row justify-between items-center p-4">
                                    <p className="font-medium leading-5">My service</p>
                                    <button className="cursor-pointer" type="button" onClick={() => setOpen(!open)}><Icons.closeButtonIcon /></button>
                                </div>
                                <div className="p-4">
                                    <ComponentCard
                                        containerStyle="bg-[#ececec] mb-2"
                                        iconL1={<Icons.starNoColorIcon />}
                                        iconStyle="bg-white"
                                        title="My advertising profile"
                                        showExpandRight
                                    />
                                    <ComponentCard
                                        containerStyle="bg-[#ececec] mb-2"
                                        iconL1={<Icons.switchChangeIcon />}
                                        iconStyle="bg-white"
                                        title="Switch to client version"
                                        showExpandRight
                                    />
                                </div>
                            </>}
                    </Popup>
                </div>
            </div>
            {role === 'doula' ? <FooterDoula /> : <FooterClient />}

        </>
    )
}