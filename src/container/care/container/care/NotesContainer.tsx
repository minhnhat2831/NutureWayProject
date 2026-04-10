import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";

const NOTES = [
    { title: 'General Health Assessment', subText: 'Discussed management of common pregnancy symptoms such as nausea, fatigue, and back pain.', time: '17 Jan 2023' },
    { title: 'Nutritional Conseling', subText: 'Continue consuming a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats.', time: '17 Jan 2023' },
]

export default function NotesContainer() {
    return (<>
        <Header showBack title="Notes" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen bg-white">
            <div className="mt-4 px-2 flex flex-col gap-4">
                {NOTES.map((e, index) => (
                    <ComponentCard 
                        key={index}
                        title={e.title}
                        subSubTitle={e.subText}
                        subTitle={e.time}
                        containerStyle="rounded-none hover:bg-white"
                        showTextLine
                        showExpandRight
                    />
                ))}
            </div>

        </div>
    </>)
}