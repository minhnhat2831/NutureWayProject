import { Icons } from "@/components/common/Icons";
import Popup from "@/components/common/Popup";
import { InputForm } from "@/components/form/InputForm";
import ComponentCard from "@/components/shared/ComponentCard";
import { useState } from "react";
import { useNavigate } from "react-router";
import useCare from "../../hook/useCare";
import { FormProvider } from "react-hook-form";
import { SelectForm } from "@/components/form/SelectForm";
import usePackage from "../../hook/usePackage";
import { ButtonField } from "@/components/common/ButtonField";
import useDoula from "@/container/doulas/hook/useDoula";
import ComponentSkeletonCard from "@/components/shared/ComponentSkeletonCard";
import avatar from '/public/profile.jpg'
import { toast } from "react-toastify";
import { queryClient } from "@/main";

export default function MyClientContainer() {
    const nav = useNavigate()
    const [open, setOpen] = useState(false)
    const { usePostClientManually } = useCare()
    const { method, onSubmit, loading } = usePostClientManually({
        onSuccess: (res) => {
            toast.success(res.message)
            queryClient.invalidateQueries({ queryKey: ['doula-client'] })
            setOpen(false)
        }})

    const { useGetMyPackage } = usePackage()
    const { data } = useGetMyPackage()

    const { useGetDoulaClent } = useDoula()
    const { data: doulaClientData, isLoading: doulaClientLoading } = useGetDoulaClent()

    const dataPackage = data?.map((e) => ({
        value: e.id, label: e.name
    })) ?? []

    const submit = method.handleSubmit(async (data) => {
        const getFullName = method.getValues('fullName')
        const [firstName, lastName] = getFullName.split(' ')

        onSubmit({ ...data, firstName: firstName, lastName: lastName })
    })

    if (doulaClientLoading) {
        return (<>
            <div className="flex flex-col gap-4 px-2">
                {[1, 2, 3].map((e) => (
                    <ComponentSkeletonCard key={e} />
                ))}
            </div>
        </>)
    }

    return (<>
        <div className="flex flex-col gap-4 px-2">
            {doulaClientData.map((care, index) => (
                <ComponentCard
                    key={index}
                    img={care?.user?.picture?.uri ?? avatar}
                    imgStyle="w-15 h-15"
                    title={care?.user?.fullName}
                    subTitle={care?.doulaPackage?.name}
                    showExpandRight
                    onClick={() => nav(`/home/detail/${care?.user?.id}/client`, {
                        state : {
                            careId : care?.id,
                            doulaPackageId : care?.doulaPackage?.id,
                            doulaPackage : care?.doulaPackage?.name,
                        }
                    })}
                />
            ))}
            <ComponentCard
                iconStyle="rounded-xl bg-white border-gray-200 border"
                iconL1={<Icons.addIcon />}
                title="Add a client manually"
                onClick={() => setOpen(true)}
            />
            <Popup open={open} onOpenChange={setOpen} className="overflow-auto absolute mt-5 top-100 bottom-0 z-50 rounded-t-2xl w-full flex flex-col h-auto bg-white shadow-xl focus:outline-none">
                <div className={`p-4 absolute w-full rounded-t-2xl bg-white`}>
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-lg leading-6 font-normal">Add a client</p>
                        <button type="button" className="cursor-pointer hover:bg-gray-100" onClick={() => setOpen(!open)}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>
                    <FormProvider {...method}>
                        <InputForm
                            name="fullName"
                            insideLabel="Client's full name"
                            placeholder="client's full name"
                            containerClassName="mt-4"
                            disabled={loading}
                        />
                        <SelectForm
                            name="doulaPackageId"
                            options={dataPackage}
                            disabled={loading}
                            containerClassName="my-4"
                        />
                        <ButtonField
                            type="button"
                            fullWidth
                            onClick={submit}
                            disabled={loading}
                            variant="primary">
                            Add client
                        </ButtonField>
                    </FormProvider>
                </div>
            </Popup>
        </div>
    </>)
}