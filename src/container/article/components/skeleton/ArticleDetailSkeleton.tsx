import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";

export default function ArticleDetailSkeleton() {
    return (<>
        <Header
            showBack
            iconR1={<Icons.starNoColorIcon />}
            iconR2={<Icons.shareIcon />}
        />
        <div className="h-screen bg-white overflow-y-auto">
            <div className="mb-5">
                <div className="px-2 my-5 animate-pulse">
                    <div className="w-full h-3 bg-[#cecece]" />
                    <div className="w-[70%] h-3 bg-[#cecece] mt-1" />
                </div>
                <img className="w-100 h-45 animate-pulse bg-[#cecece]" />
                <div className="px-4 my-4 animate-pulse">
                    <div className="w-[80%] h-3 bg-[#cecece]" />
                    {[1, 2, 3, 4, 5, 6].map((e) => (
                        <div key={e}>
                            <div className="w-[90%] h-3 bg-[#cecece] mt-2" />
                            <div className="w-[70%] h-3 bg-[#cecece] mt-2" />
                            <div className="w-[85%] h-3 bg-[#cecece] mt-2" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>)
}