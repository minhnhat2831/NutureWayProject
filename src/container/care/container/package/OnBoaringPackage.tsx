import PackageLayout from "../../components/PackageLayout"
import SectionPackage from "../../components/section/SectionPackage"
import usePackage from "../../hook/usePackage"
import type { packageRequest } from "../../schema/PackageSchema.type"
import { useNavigate } from "react-router"
import { useStepForm } from "@/container/auth/hooks/useFormStage"
import SectionPrice from "../../components/section/SectionPrice"
import SectionDesInCluded from "../../components/section/SectionDesIncluded"
import SectionQuantification from "../../components/section/SectionQuantification"

const STEPS = [
    { id: 1, title: "Let's add your package", subTitle: "Please upload a cover photo,and give details to your package listing" },
    { id: 2, title: 'Your pricing policy', subTitle: (`How much do you charge ore week How often will you charge per week Do you charge for special circumstances`) },
    { id: 3, title: "What's included", subTitle: "Please give details of what you would like to include in your doula service package" },
    { id: 4, title: "Your qualifications", subTitle: "Let the client know the qunlification or certification you current hold" }
]

const STEP_FIELDS: Record<number, (keyof packageRequest)[]> = {
    1: ['image', "shortDescription", "name"],
    2: ['price'],
    3: ['description'],
    4: ['qualifications']
}
export default function OnBoadingPackage() {
    const { back, isFirst, isLast, next, step, uploadProgress } = useStepForm(4)
    const nav = useNavigate()

    const { usePostDoulaPackage } = usePackage()
    const { onSubmit, method, success } = usePostDoulaPackage()

    const handleNext = async () => {
        const fields = STEP_FIELDS[step]
        const isValid = await method.trigger(fields)

        if (!isValid) return

        next()
    }

    const submit = method.handleSubmit(async (data) => {
        console.log(data)
        const dataSubmit: packageRequest = {
            ...data,
            qualifications: data.qualifications
                .map(q => q.value)
                .filter(v => v.trim() !== ""),
        }
        await onSubmit(dataSubmit)
    })

    return (<>
        {success === false && <>
            {STEPS.map((item, index) => item.id === step &&
                <PackageLayout
                    method={method}
                    key={index}
                    title={item.title}
                    subTitle={item.subTitle}
                    buttonName="Next"
                    processBar={uploadProgress}
                    children={<>
                        {step === 1 && <SectionPackage />}
                        {step === 2 && <SectionPrice />}
                        {step === 3 && <SectionDesInCluded />}
                        {step === 4 && <SectionQuantification />}
                    </>}
                    loading={false}
                    onClickBack={isFirst ? () => nav('/home/care') : back}
                    onClickButton={isLast ? submit : handleNext}
                    onClickClose={() => nav('/home/care')}
                />
            )}
        </>
        }

        {success === true && <>
            <PackageLayout
                method={method}
                title={'Thank you!'}
                subTitle={'Your package has been added successfully. It is now live on NurtureWave'}
                buttonName="Next"
                children={<></>}
                loading={false}
                onClickBack={() => nav('/home/care')}
                onClickButton={() => { }}
                onClickClose={() => nav('/home/care')}
            />
        </>}
    </>)
}