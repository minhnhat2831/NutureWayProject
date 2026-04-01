import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";


export default function ArticlePage() {
    return (<>
        <div className="h-screen bg-white">
            <Header
                showBack
                iconR1={<Icons.starNoColorIcon />}
                iconR2={<Icons.shareIcon />}
            />
            <div className="px-2">
                <h1 className="font-bold text-xl font-serif">How to create a birth plan - Planing for labour and delivery</h1>
                <p className="text-gray-400">Cly Fisher * 11 Jan 2023</p>
            </div>
            <img src='https://placehold.co/600x400' alt="picture"></img>
            <div className="px-2 font-serif">
                <h2 className="font-bold text-xl">What is a birth plan?</h2>
                <article>
                    A birth plan is a written summary of your preferences for whenyou are in labour and giving birth............
                </article>
            </div>
        </div>
    </>)
}