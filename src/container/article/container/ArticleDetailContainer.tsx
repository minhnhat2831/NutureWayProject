import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";

export default function ArticleDetailContainer() {
    return (<>
        <div className="h-screen bg-white">
            <Header
                showBack
                iconR1={<Icons.starNoColorIcon />}
                iconR2={<Icons.shareIcon />}
            />
            <div className="px-2 my-5">
                <h1 className="text-xl font-semibold leading-6">How to create a birth plan - Planing for labour and delivery</h1>
                <p className="text-gray-400 leading-5 font-normal">Cly Fisher * 11 Jan 2023</p>
            </div>
            <img src='https://placehold.co/393x180' alt="picture" />
            <div className="px-4 my-4 font-serif">
                <h2 className="font-semibold leading-6 text-lg mb-2">What is a birth plan?</h2>
                <article className="font-normal text-sm leading-6">
                    A birth plan is a written summary of your preferences for whenyou are in labour and giving birth............
                </article>
            </div>
        </div>
    </>)
}