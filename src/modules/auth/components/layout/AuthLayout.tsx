import { ButtonField } from "@/components/common/ButtonField"
import { Icons } from "@/components/common/Icons"
import type { JSX } from "react"
import { FormProvider, type UseFormReturn } from "react-hook-form"
import { useNavigate } from "react-router"

interface props {
    title: string
    subTitle?: string | JSX.Element
    children: JSX.Element
    buttonName: string
    method: UseFormReturn<any>
    disable? : boolean
    onClick?: () => void
}

export default function AuthLayout({
    title,
    subTitle,
    children,
    buttonName,
    method,
    disable = false,
    onClick,
}: props) {
    const nav = useNavigate()
    return (<>
        <FormProvider {...method}>
            <div className="h-screen flex justify-start flex-col items-center bg-white">
                <div className="w-full h-full px-2 flex-col flex justify-start py-8">
                    <button className="cursor-pointer px-2 w-fit" onClick={() => nav(-1)}>
                        <Icons.arrowLeftIcon />
                    </button>
                    <form onSubmit={(e) => e.preventDefault()} className="h-full flex flex-1 flex-col mt-5 gap-2 px-2">
                        <h1 className="text-2xl font-serif">{title}</h1>
                        <h2 className="text-sm font-serif">{subTitle}</h2>
                        {children}
                        <div className="mt-auto">
                            <ButtonField
                                disabled={disable}
                                type="button"
                                fullWidth
                                onClick={onClick}
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