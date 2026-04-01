import { OtpTimer } from "@siamf/otp-timer";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import OTPInput from "react-otp-input";
import useFormData from "../../hooks/useFormData";
import { useLocation, useNavigate } from "react-router";

export default function SectionSendOtp({email} : {email : string}) {
    const { watch, setValue  } = useFormContext()
    const { sendOtp } = useFormData()
    const nav = useNavigate()
        const location = useLocation();
    const from = location.state?.from

    useEffect(() => {
        if(!email) {
            nav('/')
        }
        if (email && from === 'register') {
            sendOtp().catch(() => { })
        }
    }, [email, nav])

    return (<>
        <div className="flex justify-center">
            <OTPInput
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
                value={watch('otp')}
                onChange={(e) => setValue('otp', e)}
                numInputs={5}
                renderInput={(props) => <input {...props} />}
            />
        </div>

        <OtpTimer
            minutes={0}
            seconds={59}
            onResend={() => {}}
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
    </>
    )
}