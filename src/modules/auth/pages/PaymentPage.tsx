import { InputForm } from "@/components/form/InputForm"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import AuthLayout from "../components/layout/AuthLayout"
import { Icons } from "@/components/common/Icons"

export default function PaymentPage() {
    const method = useForm()
    const nav = useNavigate()

    const handleSubmit = () => {
        nav('/home')
    }
    return (<>
        <AuthLayout
            method={method}
            title="Payment"
            subTitle={<><Icons.paymentIcon /></>}
            children={<>
                <InputForm
                    type="number"
                    name="cardNumber"
                    label="Card Number"
                    placeholder="Card Number"
                    required>
                </InputForm>
                <InputForm
                    name="cardHolderName"
                    label="Card Holder Number"
                    required
                    placeholder="Card Holder Number">
                </InputForm>
                <div className="flex">
                    <InputForm
                        label="CVV"
                        type="number"
                        name="cvv"
                        required
                        placeholder="CVV">
                    </InputForm>
                    <InputForm
                        type="number"
                        name="expiryDate"
                        label="Expiry Date"
                        required
                        placeholder="MM/YY">
                    </InputForm>
                </div>

                <InputForm
                    name="address"
                    label="Address (Optional)"
                    placeholder="Address (Optional)">
                </InputForm>

                <InputForm
                    name="postalCode"
                    label="Postal Code (Optional)"
                    placeholder="Postal Code (Optional)">
                </InputForm>

            </>}
            buttonName="Start trial"
            onClick={() => handleSubmit()}
        >
        </AuthLayout>

    </>)
}