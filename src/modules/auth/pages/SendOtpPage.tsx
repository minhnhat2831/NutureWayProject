import { useEffect, useState } from "react"
import { useLocation } from 'react-router'
import { OtpTimer } from "@siamf/otp-timer"
import OtpInput from "react-otp-input"
import { toast } from "react-toastify"
import AuthLayout from "../components/layout/AuthLayout"
import useAuth from "../hooks/useAuth"
import { useOnboardingStore } from "../store/useOnboardingStore"

export default function SendOtpPage() {
    const { useSendOtp } = useAuth()
    const {
        method,
        email,
        isLoadingVerify,
        sendOtp,
        verifyOtp,
        checkResetPass
    } = useSendOtp()
    const setVerifyData = useOnboardingStore((s) => s.setVerifyData)
    const [otp, setOtp] = useState("")
    const location = useLocation();
    const from = location.state?.from

    const title = from === 'register'
        ? 'Verify your email address'
        : 'Check your email';

    useEffect(() => {
        if (email && from === 'register') {
            sendOtp().catch(() => { })
        }
    }, [])

    const handleResend = async () => {
        try {
            await sendOtp()
        } catch (err: any) { }
    }

    const onSubmit = async () => {
        if (otp.length < 5) {
            toast.error("Vui lòng nhập đủ 5 số OTP")
            return
        }

        if (from === 'register') {
            try {
                const result = await verifyOtp(otp)
                setVerifyData(result.data)
            } catch (err: any) { }
            
        }else{
            try {
                const result = await checkResetPass(otp)
                setVerifyData(result.data)
            } catch (err: any) { }
        }
    }

    return (
        <AuthLayout
            method={method}
            title={title}
            subTitle={`We have sent a code to your designated email address. This is for the security of your account`}
            disable={isLoadingVerify}
            buttonName={isLoadingVerify ? "Verifying..." : "Next"}
            onClick={() => onSubmit()}
            children={<>
                <div className="flex justify-center">
                    <OtpInput
                        containerStyle={{
                            padding: 10,
                            width: '100%',
                            height: 100,
                            flex: 1,
                            justifyContent: 'space-between'
                        }}
                        inputStyle={{
                            width: 50,
                            height: 50,
                            backgroundColor: '#ebebeb',
                            fontSize: 28,
                            borderRadius: 8
                        }}
                        value={otp}
                        onChange={setOtp}
                        numInputs={5}
                        renderInput={(props) => <input {...props} />}
                    />
                </div>

                <OtpTimer
                    minutes={0}
                    seconds={5}
                    onResend={handleResend}
                    renderText={(props) => (
                        <p className="font-serif flex justify-center">
                            Didn't receive the OTP?
                            <span className="ml-1 text-violet-700 font-normal">
                                {props.seconds} seconds
                            </span>
                        </p>
                    )}
                    renderButton={(props) => (
                        <div className="flex justify-center">
                            <p className="font-serif">Didn't receive the OTP?</p>
                            <button
                                className="ml-1 font-serif text-violet-500 hover:text-violet-800 cursor-pointer"
                                {...props}
                            >
                                Send Code Again
                            </button>
                        </div>
                    )}
                />
            </>}
        >
        </AuthLayout>
    )
}