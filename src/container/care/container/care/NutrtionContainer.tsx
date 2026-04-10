import Header from "@/layout/HeaderLayout";
import NutritrionCard from "../../components/NutritionCard";
import { Icons } from "@/components/common/Icons";
import Scrollbar from "react-scrollbars-custom";

const NUTRITION = [
    { title: 'Folic Acid', subTitle: 'Vital for preventing neural tube defects in the fetus.', process: 30, recommended: 30, maximum: 1000 },
    { title: 'lodine', subTitle: 'For the development of the fetal brain and nervous system.', process: 45, recommended: 200, maximum: 1100 },
    { title: 'Vitamin D', subTitle: 'Help the baby’s bones and teeth develop.', process: 100, recommended: 100, maximum: 100 },
]

export default function NutritionContainer() {
    return (<>
        <Header showBack title="Nutrition" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen z-9 bg-white relative">
            <Scrollbar width={'auto'} height={'auto'}>
                <div className="mt-4 px-4">
                    {NUTRITION.map((e, index) => (
                        <div className="gap-4 my-4">
                            <NutritrionCard
                                key={index}
                                title={e.title}
                                subTitle={e.subTitle}
                                processBar={e.process}
                                maximum={e.maximum}
                                recommended={e.recommended}
                            />
                        </div>

                    ))}
                </div>
            </Scrollbar>
        </div>

    </>)
}