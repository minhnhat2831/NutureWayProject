import type { ReactNode } from "react";
import { Icons } from "../common/Icons";

interface ComponentCardProps {
    iconL1?: ReactNode
    avatar? : string
    title: string
    subTitle?: string
    onClick: () => void
    iconR1? : ReactNode

    containerStyle?: string
    iconStyle?: string
    imgStyle? : string

    showExpandRight?: boolean
    showTextRight?: boolean
    showRateStar? : boolean
    haveRequest? : boolean

    textRight? : string
    rateStar? : number
}

export default function ComponentCard({
    iconL1,
    iconR1,
    avatar,
    onClick,
    subTitle,
    title,
    containerStyle,
    iconStyle,
    imgStyle,
    showExpandRight = false,
    showTextRight = false,
    showRateStar = false,
    haveRequest = false,
    rateStar,
    textRight
}: ComponentCardProps) {
    return (<>
        <button
            className={`w-full h-20 px-2 flex flex-row items-center justify-between rounded-2xl hover:bg-violet-100 hover:shadow-lg cursor-pointer ${containerStyle}`}
            onClick={onClick}
        >
            {haveRequest && <div className="w-2 h-2 rounded-full bg-red-400 mr-5"></div>}
            <div className={iconL1 || avatar ? `w-10 h-10 bg-blue-100 flex justify-center items-center rounded-full ${iconStyle}` : ''}>
                {iconL1}
                {<img src={avatar} className={`rounded-full ${imgStyle}`} />}
            </div>
            <div className="font-serif text-left flex-1 truncate ml-5">
                <p className="text-black text-lg wrap-break-words whitespace-normal">{title}</p>
                <p className="text-gray-400 text-sm">{subTitle}</p>
            </div>

            {showExpandRight && !showTextRight && !showRateStar && <Icons.expandRightIcon />}
            {!showExpandRight && showTextRight && <p className={textRight === 'Now' ? `text-black` : 'text-gray-400'}>{textRight}</p>}
            {showExpandRight && showTextRight && <p className={textRight === 'Now' ? `text-black flex items-center` : 'text-gray-400 flex items-center'}>{textRight} <Icons.expandRightIcon /></p>}

            {showRateStar && showExpandRight && <p className="flex items-center"><Icons.starIcon />{rateStar}<Icons.expandRightIcon /></p>}
            {showRateStar && !showExpandRight && <p className="flex items-center"><Icons.starIcon />{rateStar}</p>}

            {iconR1}
        </button>
    </>)
}