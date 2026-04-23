import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";

export default function ImageAndVideoContainer() {
    return (<>
        <Header showBack title="Images & videos" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen bg-white">
            <div className="flex flex-row flex-wrap gap-2">
                {[1,2,3,4,5].map((e) => (
                    <img src={'https://i.pravatar.cc/150?img=14'} key={e} alt='img' width={120} height={120}/>
                ))}
            </div>

        </div>
    </>)
}