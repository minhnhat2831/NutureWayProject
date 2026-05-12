export default function CategoriesCardSkeleton() {
    return (<>
        <div className="flex-col flex items-center w-20 h-35 animate-pulse">
            <button
                type="button"
                className="w-20 h-20 rounded-3xl shadow-md bg-[#cecece]">
            </button>
            <div className="mt-3 w-15 bg-[#cecece] h-3" />
        </div>
    </>)
}