import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";

const DOUCUMENT = [
    { doc: 'Doula Care Agreement.pdf', icon: <Icons.pdfFileIcon color="red" />, time: '09 Jan 2023' },
    { doc: 'Ultrasonic Scan.pdf', icon: <Icons.pdfFileIcon color="red" />, time: '10 Jan 2023' },
    { doc: 'Service standard.docx', icon: <Icons.docxFileIcon color="blue" />, time: '16 Jan 2023' },
]

export default function DocumentContainer() {

    return (<>
        <Header showBack title="Documents" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen bg-white">
            <div className="flex flex-col gap-4 px-2">
                {DOUCUMENT.map((e, index) => (
                    <ComponentCard
                        key={index}
                        title={e.doc}
                        subTitle={e.time}
                        iconL1={e.icon}
                        containerStyle="hover:bg-white"
                        iconStyle={e.doc.includes('.pdf') ? "bg-red-200" : "bg-blue-200"}
                    />
                ))}
            </div>
        </div>
    </>)
}