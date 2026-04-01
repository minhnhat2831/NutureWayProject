import { Icons } from "../common/Icons";

interface DoulasCardProps {
    img : string
    title : string
    subTitle : string
    rateStar : number
    onClick : () => void
}

export default function DoulasCard({
    img,
    title,
    subTitle,
    rateStar,
    onClick
}:DoulasCardProps) {
    return (<>
        <div className="flex-1 flex-col min-w-70 h-50 cursor-pointer hover:bg-gray-100"
            onClick={onClick}
        >
            <img src={img} className="w-full h-30 rounded-3xl shadow-lg border "></img>
            <div className="mt-3">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-serif text-2xl">{title}</p>
                    <p className="flex items-center font-serif text-2xl"><Icons.starIcon />{rateStar}</p>
                </div>
                <p className="font-serif text-gray-400 truncate">{subTitle}</p>
            </div>
        </div>
    </>)
}