import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";

const IMAGE = ['https://i.pravatar.cc/150?img=14', 'https://i.pravatar.cc/150?img=13', 'https://i.pravatar.cc/150?img=18', 'https://i.pravatar.cc/150?img=10', 'https://i.pravatar.cc/150?img=18', 'https://i.pravatar.cc/150?img=16']
export default function ImageAndVideoContainer() {
    return (<>
        <Header showBack title="Images & videos" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen bg-white">
            <div className="flex flex-row flex-wrap gap-2">
                {IMAGE.map((e) => (
                    <img src={e} alt='img' width={120} height={120}/>
                ))}
            </div>

        </div>
    </>)
}