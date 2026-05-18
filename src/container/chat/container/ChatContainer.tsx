import { Icons } from "@/components/common/Icons"
import ComponentCard from "@/components/shared/ComponentCard"
import usePackage from "@/container/care/hook/usePackage"
import { useAuthen } from "@/context/AuthContext"
import { FooterClient, FooterDoula } from "@/layout/FooterLayout"
import Header from "@/layout/HeaderLayout"
import { useState } from "react"
import { useNavigate } from "react-router"
import InboxSkeleton from "../components/InboxSkeleton"
import { PackageRequestSubTitle, PackageRequestTitle } from "../../package/constants/PackageRequestTitle"
import { ButtonField } from "@/components/common/ButtonField"
import Popup from "@/components/common/Popup"
import usePackages from "@/container/package/hooks/usePackage"
import { toast } from "react-toastify"
import { queryClient } from "@/main"

const MESSAGES = [
    { avatar: 'https://i.pravatar.cc/150?img=19', title: 'Nellie King', text: 'I can come visit your home at ...', time: '25m' },
    { avatar: 'https://i.pravatar.cc/150?img=50', title: 'Pauline Hand', text: 'I can come visit your home at ...', time: '5m' },
    { avatar: 'https://i.pravatar.cc/150?img=9', title: 'Carlos Pfannerstill', text: 'I can come visit your home at ...', time: '30m' },
]

const TABS = ['Chat', 'Inbox']

export default function ChatContainer() {
    const { role } = useAuthen()
    const [content, setContent] = useState('Chat')
    const nav = useNavigate()
    const { useGetMyPackageRequest } = usePackage()
    const { data, loading } = useGetMyPackageRequest()

    const [open, setOpen] = useState(false)
    const [getId, setGetId] = useState('')

    const { usePostPackageRequestCheck, useGetPackageRequestById } = usePackages()
    const { data: packageItemData } = useGetPackageRequestById(getId)

    const { onSubmit, loading: loadingCheck } = usePostPackageRequestCheck({
        onSuccess: (res) => {
            toast.success(res.message)
            queryClient.invalidateQueries({ queryKey: ['my-package-request'] })
            setOpen(false)
        }
    })

    const submit = async (status : string) => {
        const reviewRequestData = {
            id: getId,
            data: {
                status: status,
                notificationId: ''
            }
        }

        await onSubmit(reviewRequestData)
    }

    if (loading) {
        return <InboxSkeleton />
    }

    return (<>
        <div className="h-screen bg-white overflow-auto">
            <Header title="Messages" iconR1={<Icons.addIcon />} />
            <div className="relative border-b border-gray-200 mb-4">
                <div className="flex">
                    {TABS.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setContent(tab)}
                            className={`flex-1 pb-3 text-center capitalize font-medium transition
                        ${content === tab ? 'text-violet-500  font-serif' : 'text-gray-400 font-serif'}`}>
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
                            onClick={() => nav(`/home/message/${index}`)}
                        />
                    ))}
                </div>
            </>}
            {content === 'Inbox' && <>
                <div className="flex flex-col gap-4 px-2 overflow-auto">
                    {role === 'doula' && <>
                        {data.map((care, index) => (
                            <ComponentCard
                                key={index}
                                img={care?.user?.picture?.uri}
                                imgStyle="rounded-xl w-15 h-15 bg-gray-300"
                                title={`${care?.user?.fullName} requested your service`}
                                subTitle={'Tap to view and respond'}
                                haveRequest={care.status === 'pending' ? true : false}
                                showTextLine
                                showExpandRight
                                onClick={() => care.status === 'pending' ? (
                                    setOpen(true),
                                    setGetId(care?.id)
                                ) : {}}
                            />
                        ))}
                        {data.length < 1 && <div className="px-4 mt-1 font-serif">
                            <p className="text-sm text-gray-500 text-center">You don't have any message yet!</p>
                        </div>}
                    </>}
                    {role === 'user' && <>
                        {data.map((care, index) => (
                            <ComponentCard
                                key={index}
                                img={care?.user?.picture?.uri}
                                imgStyle="rounded-xl w-15 h-15 bg-gray-300"
                                title={`${care?.doula?.user?.fullName} ${PackageRequestTitle(care.status)}`}
                                subTitle={PackageRequestSubTitle(care.status)}
                                showTextLine
                                showExpandRight
                                onClick={() => { }}
                            />
                        ))}
                        {data.length < 1 && <div className="px-4 mt-1 font-serif">
                            <p className="text-sm text-gray-500 text-center">You don't have any message yet!</p>
                        </div>}
                    </>}
                </div>
            </>}
            <Popup open={open} onOpenChange={setOpen} className="absolute mt-5 top-50 bottom-0 z-50 rounded-t-2xl w-full flex flex-col h-auto bg-white shadow-xl focus:outline-none">
                <div className={`p-4 absolute w-full rounded-t-2xl bg-white overflow-auto`}>
                    <div className="flex flex-row justify-between items-center">
                        <h1 className="font-medium text-lg leading-5 font-serif">Review request</h1>
                        <button className="cursor-pointer hover:bg-gray-100" onClick={() => setOpen(false)}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>
                    <div className="flex flex-col gap-4 px-2">
                        <ComponentCard
                            containerStyle="hover:bg-white hover:shadow-none"
                            img={packageItemData?.user?.picture?.uri}
                            imgStyle="w-12 h-12 rounded-2xl bg-gray-300"
                            title={packageItemData?.user?.fullName}
                            subSubTitle={packageItemData?.user?.middleName}
                            iconR1={<button className="w-fit px-5 bg-blue-700 rounded-3xl" onClick={() => nav('/home/message/0')}>
                                <p className="font-serif text-white">Chat</p>
                            </button>}
                            onClick={() => nav('/home/message/0')}
                        />
                    </div>
                    <div className="w-full h-0.5 bg-[#f3f3f3] my-2" />
                    <div className="flex flex-col gap-4 px-2 my-4">
                        <ComponentCard
                            iconL1={<Icons.cubeIcon stroke="blue" />}
                            title={packageItemData?.package?.name}
                            subSubTitle="Package requested"
                            showExpandRight
                            onClick={() => nav(`/home/detail/package-detail/${packageItemData?.doulaPackageId}`)}
                        />
                    </div>
                    <div className="border border-gray-200 rounded-2xl p-4">
                        <h2 className="font-medium text-lg leading-5 font-serif">{packageItemData?.user?.lastName} says</h2>
                        <p className="font-normal text-sm leading-5 font-serif my-4 text-gray-400">{packageItemData?.message}</p>
                    </div>
                    <div className="flex flex-row mt-5">
                        <ButtonField
                            variant="secondary"
                            fullWidth
                            onClick={() => submit('rejected')}
                            disabled={loadingCheck}
                        >
                            <Icons.closeButtonIcon />
                        </ButtonField>
                        <ButtonField
                            variant="primary"
                            fullWidth
                            onClick={() => submit('approved')}
                            disabled={loadingCheck}
                        >
                            <Icons.checkIcon />
                        </ButtonField>
                    </div>
                </div>
            </Popup>
        </div>
        {role === 'doula' ? <FooterDoula /> : <FooterClient />}
    </>)
}