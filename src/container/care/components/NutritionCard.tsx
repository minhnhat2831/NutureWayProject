import { Icons } from "@/components/common/Icons";
import ProcessBar from "@/components/shared/ProcessBar";

interface Props {
    title : string
    subTitle : string
    processBar : number
    recommended : number
    maximum : number
}
export default function NutritrionCard({
    title,
    subTitle,
    processBar,
    recommended,
    maximum
}:Props) {
    return (<>
        <div className="w-full h-auto border rounded-2xl gap-3 p-4">
            <div className="flex flex-row gap-3 my-2">
                <div className="w-fit h-fit p-2 bg-blue-300 rounded-xl">
                    <Icons.pillIcon color="blue" />
                </div>
                <div className="gap-5">
                    <p className="font-medium text-lg leading-5">{title}</p>
                    <p className="font-normal text-sm leading-4 text-gray-500">{subTitle}</p>
                </div>
            </div>
            <ProcessBar value={processBar} />
            <div className="gap-4 my-2 flex flex-row justify-between">
                <div className="text-left">
                    <p className="text-sm leading-5 font-normal text-gray-400">Recommended</p>
                    <p className="text-lg leading-5 font-medium">{recommended} mg-day</p>
                </div>
                <div className="text-right">
                    <p className="text-sm leading-5 font-normal text-gray-400">Maximum</p>
                    <p className="text-lg leading-5 font-medium">{maximum} mg/day</p>
                </div>
            </div>
        </div>
    </>)
}