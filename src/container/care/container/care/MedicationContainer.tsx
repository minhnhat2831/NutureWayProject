import { ButtonField } from "@/components/common/ButtonField"
import { Icons } from "@/components/common/Icons"
import { InputField } from "@/components/common/InputField"
import Popup from "@/components/common/Popup"
import ComponentCard from "@/components/shared/ComponentCard"
import Header from "@/layout/HeaderLayout"
import { useState } from "react"

const MEDICATION = [
    { img: 'https://i.pravatar.cc/150?img=10', title: 'Panadol', subSubTitle: 'Paracetamol 50mg', subTitle: '3 times a day' },
    { img: 'https://i.pravatar.cc/150?img=13', title: 'Panadol', subSubTitle: 'Paracetamol 50mg', subTitle: '3 times a day' },
    { img: 'https://i.pravatar.cc/150?img=18', title: 'Panadol', subSubTitle: 'Paracetamol 50mg', subTitle: '3 times a day' },
]
export default function MedicationContainer() {
    const [open, setOpen] = useState(false)
    return (<>
        <Header showBack title="Medication" titleAlign="center" iconR1={<Icons.addIcon />} onClickIconR1={() => setOpen(!open)} />
        <div className="h-screen bg-white z-0 relative">
            <Popup open={open} onOpenChange={setOpen}>
                <div className={`px-4 absolute w-full rounded-t-2xl bg-white`}>
                    <div className="py-4 flex justify-between">
                        <p className="text-lg leading-6 font-normal">Add a mediaction</p>
                        <button type="button" className="cursor-pointer hover:bg-gray-100" onClick={() => setOpen(!open)}>
                            <Icons.closeButtonIcon />
                        </button>
                    </div>
                    <div className="bg-[#efefef] w-full h-50 flex flex-col rounded-2xl items-center justify-center cursor-pointer">
                        <Icons.imageIcon />
                        Tap to upload video
                        <input
                            type="file"
                            className="hidden"
                            accept=".pdf,.doc,.docx" >
                        </input>
                    </div>

                    <form className="flex flex-col my-4 gap-4">
                        <InputField
                            className="bg-[#efefef]"
                            placeholder="BrandName"
                            insideLabel='Brand Name'
                        />
                        <InputField
                            className="bg-[#efefef]"
                            placeholder="Drug name"
                            insideLabel='Drug name'
                        />
                        <InputField
                            className="bg-[#efefef]"
                            placeholder="Dose"
                            insideLabel='Dose'
                        />
                        <InputField
                            className="bg-[#efefef]"
                            placeholder="0"
                            insideLabel='How many times a day'
                        />
                        <ButtonField
                            className="mt-8"
                            fullWidth
                            type="button"
                            variant="primary"
                        >
                            Save
                        </ButtonField>
                    </form>
                </div>
            </Popup>

            <div className="flex flex-col gap-4 px-2">
                {MEDICATION.map((e, index) => (
                    <ComponentCard
                        key={index}
                        img={e.img}
                        title={e.title}
                        subSubTitle={e.subSubTitle}
                        subTitle={e.subTitle}
                        showExpandRight
                        showTextLine
                    />
                ))}
            </div>
        </div>
    </>)
}



