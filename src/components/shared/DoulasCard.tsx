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
        <div className="flex-1 flex-col min-w-50 h-50 cursor-pointer hover:bg-gray-100 hover:rounded-3xl"
            onClick={onClick}
        >
            <img src={img} className="w-full h-30 rounded-3xl shadow-lg"></img>
            <div className="mt-3">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-serif text-xl font-bold">{title}</p>
                    <p className="flex items-center font-serif font-semibold text-lg"><Icons.starIcon />{rateStar}</p>
                </div>
                <p className="font-serif text-gray-400 truncate">{subTitle}</p>
            </div>
        </div>
    </>)
}