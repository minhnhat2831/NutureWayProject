import Header from "@/layout/HeaderLayout";
import AppointmentCard from "../components/AppointmentCard";
import { Icons } from "@/components/common/Icons";
import AppointmentCalendar from "../components/AppointmentCalendar";
import { useAuthen } from "@/context/AuthContext";
import { FooterClient, FooterDoula } from "@/layout/FooterLayout";

const APPOINTMENT = [
    { time: '2:00pm, 23 Mar 2024', duration: '1 hour', doula: 'Nellia King', location: 'Home', purpose: 'Reqular health check' },
    { time: '7:00pm, 15 Mar 2024', duration: '3 hour', doula: 'Armando Mayert', location: 'St Vincent Hospital', purpose: 'Delivery assistance' },
]

export default function CalenderContainer() {
    const { role } = useAuthen()
    return (<>
        <Header showBack title="Appointment" titleAlign="center" iconR1={<Icons.addIcon />} />
        <div className="h-screen bg-white overflow-y-auto">
            <div>
                <AppointmentCalendar />
            </div>
            <div className="px-4 mt-4">
                {APPOINTMENT.map((e, index) => (
                    <div className="my-4">
                        <AppointmentCard
                            key={index}
                            time={e.time}
                            duration={e.duration}
                            doula={e.doula}
                            location={e.location}
                            purpose={e.purpose}
                        />
                    </div>
                ))}

            </div>
        </div>
        {role === 'doula' ? <FooterDoula /> : <FooterClient />}
    </>)
}