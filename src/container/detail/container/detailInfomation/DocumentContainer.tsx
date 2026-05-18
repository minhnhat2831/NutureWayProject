import { Icons } from "@/components/common/Icons";
import ComponentCard from "@/components/shared/ComponentCard";
import Header from "@/layout/HeaderLayout";
import useCareDocument from "../../hook/useDocument";
import { useParams } from "react-router";

const DOUCUMENT = [
    { doc: 'Doula Care Agreement.pdf', icon: <Icons.pdfFileIcon color="red" />, time: '09 Jan 2023' },
    { doc: 'Ultrasonic Scan.pdf', icon: <Icons.pdfFileIcon color="red" />, time: '10 Jan 2023' },
    { doc: 'Service standard.docx', icon: <Icons.docxFileIcon color="blue" />, time: '16 Jan 2023' },
]

export default function DocumentContainer() {
    const { id } = useParams<{ id: string }>()

    const { useGetAllDocument } = useCareDocument()
    const { data, isLoading } = useGetAllDocument(id ?? '')

    return (<>
        <Header showBack title="Documents" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen bg-white">
            <div className="flex flex-col gap-4 px-2">
                {data?.map((e, index) => (
                    <ComponentCard
                        key={index}
                        title={e.name}
                        subTitle={e?.createdAt}
                        iconL1={e?.document?.type}
                        containerStyle="hover:bg-white"
                        iconStyle={e?.document?.type.includes('.pdf') ? "bg-red-200" : "bg-blue-200"}
                    />
                ))}
                {data.length < 1 &&
                    <div className="mt-10">
                        <p className="text-gray-400 font-serif text-center">You don't have any document yet!</p>
                    </div>}
            </div>
        </div>
    </>)
}