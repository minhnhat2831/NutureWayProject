import { ButtonField } from "@/components/common/ButtonField";
import { Icons } from "@/components/common/Icons";
import Popup from "@/components/common/Popup";
import ComponentCard from "@/components/shared/ComponentCard";
import useDoula from "@/container/doulas/hook/useDoula";
import Header from "@/layout/HeaderLayout";
import { useState } from "react";
import { useParams } from "react-router";
import usePackageRequest from "../hook/usePackageRequest";
import PackageDetailSkeleton from "../components/PackageDetailSkeleton";
import { InputForm } from "@/components/form/InputForm";
import type { packageRequest } from "../schema/PackageSchema.type";
import { useAuthen } from "@/context/AuthContext";

const EXPECT = [
    { title: 'Doula reviews your request', subTitle: 'Doula will review your request and assess their suitability to meet your needs.', icon: <Icons.securityIcon /> },
    { title: 'Obtain more information', subTitle: 'Doula will contact you by message if they need more information.', icon: <Icons.messageIcon /> },
    { title: 'Doula approves your request', subTitle: 'If eligible, the doula will approve you as a client and notify us.', icon: <Icons.checkIcon /> },
]

export default function PackageRequestContainer() {
    const { user } = useAuthen()
    const [open, setOpen] = useState(false)
    const { id } = useParams<{ id : string }>()
    const { useGetDoulaPackageById } = useDoula()
    const { data, loading } = useGetDoulaPackageById(id ?? '')

    const { method, onSubmit, loading : loadingPackageRequest } = usePackageRequest()

    if(loading){
        return <PackageDetailSkeleton />
    }

    const submit = (data : packageRequest) => {
        onSubmit({
            doulaPackageId : data.doulaPackageId,
            userId : user?.id ?? '',
            message : data.message
        })
    }

    return (<>
        <div className="h-screen bg-white overflow-y-auto">
            <Header
                showBack
                title="Package Detail"
                titleAlign="center"
            />
            <img src={data?.picture.uri} alt="picture" className="w-full h-40 bg-gray-300" />
            <div className="px-4 my-8 font-serif">
                <h2 className="font-semibold text-lg leading-6">{data?.name}</h2>
                <h3 className="font-normal text-gray-400 text-sm leading-5">{data?.shortDescription}</h3>

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <label className="font-bold text-sm leading-5">Pricing</label>
                    <p className="text-sm text-gray-600 my-4 leading-5">{data?.price}</p>
                </div>

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <label className="font-bold text-sm leading-5">What's included</label>
                    <p className="text-sm text-gray-600 my-4 leading-5">{data?.description}</p>
                </div>

                <ButtonField
                    fullWidth
                    onClick={() => setOpen(true)}
                    type="button"
                >
                    Request this package
                </ButtonField>
            </div>

            <Popup open={open} onOpenChange={setOpen} className="overflow-auto absolute mt-5 top-10 bottom-0 z-50 rounded-t-2xl w-full flex flex-col h-auto bg-white shadow-xl focus:outline-none">
                <div className={`px-4 absolute w-full rounded-t-2xl bg-white`}>
                    <div className=" bg-white py-4 flex justify-between">
                        <p className="text-lg leading-6 font-normal">Send request</p>
                        <button type="button" className="cursor-pointer hover:bg-gray-100" onClick={() => setOpen(!open)}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>
                    <div className="flex flex-row gap-4 items-center">
                        <img src={data?.picture.uri} alt="avarta" className="w-20 h-20 rounded-xl bg-gray-300" />
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

                    <InputForm
                        name="message"
                        insideLabel="Detail of your request"
                        placeholder="Input"
                        disabled={!loadingPackageRequest}
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
                        disabled={loadingPackageRequest}
                        onClick={() => method.handleSubmit(submit)}
                    >Send</ButtonField>

                </div>
            </Popup>
        </div>
    </>)
}