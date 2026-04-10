import { Icons } from "@/components/common/Icons";

interface AppointmentProps {
    time: string
    doula: string
    location: string
    duration: string
    purpose: string
}

export default function AppointmentCard({
    time,
    duration,
    doula,
    location,
    purpose
}: AppointmentProps) {
    return (<>
        <div className="w-full h-auto py-4 pt-4 pb-5 rounded-2xl bg-gray-100">
            <div className="flex flex-row items-center gap-4 px-2">
                <div className="w-fit p-3 bg-blue-100 rounded-2xl">
                    <Icons.homeIcon color="blue" />
                </div>
                <p className="font-semibold text-lg leading-5">{time}</p>
            </div>
            <div className="px-2 mt-1">
                <div className="flex flex-row justify-between my-1">
                    <p className="font-serif text-lg leading-5 text-gray-400">Doula</p>
                    <p className="font-serif text-lg leading-5">{doula}</p>
                </div>
                <div className="flex flex-row justify-between my-1">
                    <p className="font-serif text-lg leading-5 text-gray-400">Location</p>
                    <p className="font-serif text-lg leading-5">{location}</p>
                </div>
                <div className="flex flex-row justify-between my-1">
                    <p className="font-serif text-lg leading-5 text-gray-400">Duration</p>
                    <p className="font-serif text-lg leading-5">{duration}</p>
                </div>
                <div className="flex flex-row justify-between my-1">
                    <p className="font-serif text-lg leading-5 text-gray-400">Purpose of visit</p>
                    <p className="font-serif text-lg leading-5">{purpose}</p>
                </div>
            </div>

        </div>
    </>)
}