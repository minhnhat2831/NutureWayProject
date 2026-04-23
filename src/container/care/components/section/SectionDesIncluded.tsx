import { TextAreaForm } from "@/components/form/TextAreaForm";

export default function SectionDesInCluded(){
    return(<>
        <TextAreaForm 
            placeholder="Tell us about it"
            name='description'
            rows={5}   
        />
    </>)
}