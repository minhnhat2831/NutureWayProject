import { useForm } from "react-hook-form"
import LoginLayout from "../components/LoginLayout"
import { useState } from "react";
import OtpInput from "react-otp-input";
import { OtpTimer } from "@siamf/otp-timer";
import { useLocation, useNavigate } from 'react-router';

export default function SendOtpPage() {
    const method = useForm()
    const nav = useNavigate()
    const [otp, setOtp] = useState("");
    const location = useLocation();
    const from = location.state?.from

    const title = from === 'login'
        ? 'Verify your email address'
        : 'Check your email';

    const handleResend = () => {
        console.log('Send you new otp. Check your email!')
    }

    const handleVerify = () => {
        if (from === 'login') {
            nav('/change-password', {state : { from : 'login'}});
        } else if (from === 'forgot-password') {
            nav('/change-password', {state : { from : 'forgot-password'}});
        }
    }

    return (<>
        <LoginLayout
            method={method}
            title={title}
            subTitle="We have sent a code to your designated email address. This is for the security of your account"
            children={<>
                <div className="flex justify-center">
                    <OtpInput
                        containerStyle={{ padding: 10, width: '100%', height: 100, flex: 1, justifyContent: 'space-between' }}
                        inputStyle={{ width: 50, height: 50, backgroundColor: '#ebebeb', gap: 20, fontSize: 28, borderRadius: 8 }}
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>

                <div>
                    <OtpTimer
                        minutes={0}
                        seconds={10}
                        onResend={handleResend}
                        renderText={(props) => <p className="font-serif flex justify-center">Didn't receive the OTP?<span className="ml-1 text-violet-700 font-normal">{props.seconds} seconds</span></p>}
                        renderButton={(props) => (
                            <div className="flex justify-center">
                                <p className="font-serif">Didn't receive the OTP?</p>
                                <button className="ml-1 font-serif text-violet-500 hover:text-violet-800 cursor-pointer" {...props}>
                                    Send Code Again
                                </button>
                            </div>)}
                    />
                </div>
            </>}
            buttonName="Next"
            onClick={() => handleVerify()}
        >
        </LoginLayout>
    </>)
}