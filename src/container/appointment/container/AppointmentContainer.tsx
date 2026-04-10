import Header from "@/layout/HeaderLayout";
import AppointmentCard from "../components/AppointmentCard";

const APPOINTMENT = [
    { time: '2:00pm, 23 Mar 2024', duration: '1 hour', doula: 'Nellia King', location: 'Home', purpose: 'Reqular health check' },
    { time: '7:00pm, 15 Mar 2024', duration: '3 hour', doula: 'Armando Mayert', location: 'St Vincent Hospital', purpose: 'Delivery assistance' },
]

export default function AppointmentsContainer() {
    return (<>
        <Header showBack title="Appointments" titleAlign="center" />
        <div className="h-screen bg-white">
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
    </>)
}