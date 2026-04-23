import { TextAreaForm } from "@/components/form/TextAreaForm";

export default function SectionPrice(){
    return(<>
        <TextAreaForm 
            placeholder="Tell us about it"
            name='price'
            rows={5}   
        />
    </>)
}