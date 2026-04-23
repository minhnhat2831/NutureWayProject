import { ButtonField } from "@/components/common/ButtonField"
import { Icons } from "@/components/common/Icons"
import Popup from "@/components/common/Popup"
import ComponentCard from "@/components/shared/ComponentCard"
import Header from "@/layout/HeaderLayout"
import { useState } from "react"
import { useParams } from "react-router"
import ImageField from "@/components/common/ImageField"
import { InputForm } from "@/components/form/InputForm"
import { FormProvider } from "react-hook-form"
import useMedication from "../../hook/useMedication"
import type { careMedicationRequest } from "../../schema/MedicationSchema.type"

export default function MedicationContainer() {
    const { id } = useParams<{ id: string }>()
    const { useCareMedication, usePostCareMedication } = useMedication()
    const { data, loading } = useCareMedication(id ?? '')
    const [open, setOpen] = useState(false)

    const { onSubmit, loading: loadingPost, method } = usePostCareMedication()

    if (loading) {
        return <div className="h-screen bg-white flex justify-center items-center">
            <Icons.buttonIcon />
        </div>
    }

    const submit = method.handleSubmit(async (data) => {
        const dataSubmit: careMedicationRequest = {
            careId: id ?? '',
            amount: data.amount,
            brandName: data.brandName,
            dose: data.dose,
            drugName: data.drugName,
            picture: data.picture,
            references: ''
        }
        onSubmit(dataSubmit)
    })

    return (<>
        <Header showBack title="Medication" titleAlign="center" iconR1={<Icons.addIcon />} onClickIconR1={() => setOpen(!open)} />
        <div className="h-screen bg-white z-0 relative">
            <Popup open={open} onOpenChange={setOpen} className="overflow-auto absolute mt-5 top-10 bottom-0 z-50 rounded-t-2xl w-full flex flex-col h-auto bg-white shadow-xl focus:outline-none">
                <div className={`px-4 w-full rounded-t-2xl bg-white`}>
                    <div className="py-4 flex justify-between">
                        <p className="text-lg leading-6 font-normal">Add a mediaction</p>
                        <button type="button" className="cursor-pointer hover:bg-gray-100" onClick={() => setOpen(!open)}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>

                    <FormProvider {...method}>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col my-4 gap-4">
                            <div className="bg-[#efefef] w-full h-50 flex flex-col rounded-2xl items-center justify-center cursor-pointer">
                                <ImageField
                                    name="picture"
                                    control={method.control}
                                    defaultImage=""
                                />
                            </div>
                            <InputForm
                                name="brandName"
                                className="bg-[#efefef]"
                                placeholder="BrandName"
                                insideLabel='Brand Name'
                                disabled={loadingPost}
                            />
                            <InputForm
                                name="drugName"
                                className="bg-[#efefef]"
                                placeholder="Drug name"
                                insideLabel='Drug name'
                                disabled={loadingPost}
                            />
                            <InputForm
                                name="dose"
                                className="bg-[#efefef]"
                                placeholder="Dose"
                                insideLabel='Dose'
                                disabled={loadingPost}
                            />
                            <InputForm
                                name="amount"
                                className="bg-[#efefef]"
                                placeholder="0"
                                insideLabel='How many times a day'
                                disabled={loadingPost}
                            />
                            <ButtonField
                                className="mt-8"
                                fullWidth
                                type="button"
                                onClick={submit}
                                variant="primary"
                                disabled={loadingPost}
                            >
                                {loadingPost ? <Icons.buttonIcon /> : 'Save'}
                            </ButtonField>
                        </form>
                    </FormProvider>
                </div>
            </Popup>

            <div className="flex flex-col gap-4 px-2">
                {data.map((e, index) => (
                    <ComponentCard
                        key={index}
                        img={e?.picture?.uri}
                        imgStyle="w-15 h-15"
                        title={e?.drugName}
                        subSubTitle={`${e?.brandName} ${e?.dose}`}
                        subTitle={`${e?.amount} times a day`}
                        showExpandRight
                        showTextLine
                    />
                ))}
            </div>
        </div>
    </>)
}