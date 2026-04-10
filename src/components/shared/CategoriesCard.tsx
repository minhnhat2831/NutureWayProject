import { getIconCategory } from "@/container/categories/constants/IconCategory";

interface CategoriesCardProps {
    icons: string
    text: string
    onClick: () => void
    loading: boolean
}

export default function CategoriesCard({
    icons,
    text,
    onClick,
    loading = false
}: CategoriesCardProps) {
    const getIcon = getIconCategory(icons)
    return (<>
        {loading &&
            <div className="flex-col flex items-center w-20 h-35">
                <button
                    type="button"
                    className="w-20 h-20 rounded-3xl shadow-md bg-blue-100 hover:bg-violet-300 focus:ring-violet-300 disabled:bg-violet-100 flex justify-center items-center cursor-pointer"
                    onClick={onClick}
                >
                    {getIcon()}
                </button>
                <p className="font-serif mt-2 text-center cursor-default wrap-break-words whitespace-normal w-20">{text}</p>
            </div>
        }
    </>)
}