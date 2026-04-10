import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";

const HELP_CENTER = ['How it work', 'Thing to expect during pregnancy']
export default function HelpCenterContainer() {
    return (<>
        <Header showBack title="Help centre" titleAlign="center" />
        <div className="h-screen bg-white py-4">
            <div className="flex flex-col gap-3">
                {HELP_CENTER.map((e) => (
                    <ComponentCard
                        title={e}
                        showTextLine
                        showExpandRight
                    />
                ))}
            </div>
        </div>
    </>)
}