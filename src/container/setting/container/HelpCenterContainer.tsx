import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";
import useSetting from "../hook/useSetting";
import { Icons } from "@/components/common/Icons";
import Scrollbar from "react-scrollbars-custom";

export default function HelpCenterContainer() {
    const { getSettingHelpCenter } = useSetting()
    const { data, loading } = getSettingHelpCenter()

    if (loading) {
        return <div className="h-screen bg-white flex flex-col justify-center items-center">
            <Icons.buttonIcon />
        </div>
    }

    return (<>
        <Header showBack title="Help centre" titleAlign="center" />
        <div className="h-screen bg-white py-4">
            <Scrollbar width={'auto'} height={'auto'}>
            <div className="flex flex-col gap-3">
                {data.map((e) => (
                    <ComponentCard
                        title={e.title}
                        showTextLine
                        showExpandRight
                    />
                ))}
            </div>
            </Scrollbar>
        </div >

    </>)
}