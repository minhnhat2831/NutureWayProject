import ComponentCard from "@/components/shared/ComponentCard"

const TABS = [
    { img: 'https://i.pravatar.cc/150?img=11', title: 'Basic Birth Package', subTitle: 'Labor and birth support. $99.99 per week' },
    { img: 'https://i.pravatar.cc/150?img=11', title: 'Basic Birth Package', subTitle: 'Labor and birth support. $99.99 per week' },
    { img: 'https://i.pravatar.cc/150?img=11', title: 'Basic Birth Package', subTitle: 'Labor and birth support. $99.99 per week' },
]

export default function SectionDoulaPackage() {
    return (<>
        <div className="gap-5 flex flex-col">
            {TABS.map((e, index) => (
                <div className="border-b-gray-400 border-b">
                    <ComponentCard
                        key={index}
                        title={e.title}
                        subTitle={e.subTitle}
                        avatar={e.img}
                        imgStyle="rounded-xl"
                        showExpandRight
                    />
                </div>
            ))}
        </div>
    </>)
}