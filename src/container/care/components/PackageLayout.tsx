import { ButtonField } from "@/components/common/ButtonField"
import { Icons } from "@/components/common/Icons"
import ProcessBar from "@/components/shared/ProcessBar"
import type { JSX } from "react"
import { FormProvider, type UseFormReturn } from "react-hook-form"

interface PackageProps {
    title : string,
    subTitle : string
    buttonName : string
    children: JSX.Element
    processBar? : number
    method: UseFormReturn<any>
    loading : boolean
    onClickClose : () => void
    onClickBack: () => void
    onClickButton: () => void
}
export default function PackageLayout({
    title,
    buttonName,
    onClickBack,
    onClickButton,
    onClickClose,
    method,
    processBar,
    subTitle,
    loading = false,
    children
}:PackageProps) {
    return (<>
        <FormProvider {...method}>
            <div className="h-screen flex flex-col justify-start items-center bg-white overflow-auto">
                <div className="w-full h-full px-2 flex-col flex justify-start py-8">
                    <div className="flex flex-row justify-between mb-4">
                        <button className="cursor-pointer px-2 w-fit" onClick={onClickBack}>
                            <Icons.arrowLeftIcon />
                        </button>
                        <button className="cursor-pointer px-2 w-fit" onClick={onClickClose}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>
                    <ProcessBar value={processBar} />
                    <form onSubmit={(e) => e.preventDefault()} className="h-full flex flex-1 flex-col mt-5 gap-2 px-2">
                        <h1 className="text-2xl font-serif">{title}</h1>
                        <h2  className="text-sm font-serif text-gray-400">{subTitle}</h2>
                        {children}
                        <div className="mt-auto w-full sticky bottom-8">
                            <ButtonField
                                disabled={loading}
                                type="submit"
                                fullWidth
                                onClick={onClickButton}
                            >
                                {buttonName}
                            </ButtonField>
                        </div>
                    </form>
                </div>
            </div>
        </FormProvider>
    </>)
}