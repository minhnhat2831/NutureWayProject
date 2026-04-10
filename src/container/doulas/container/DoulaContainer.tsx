import DoulasCard from "@/components/shared/DoulasCard"
import { useNavigate } from "react-router"
import Scrollbar from "react-scrollbars-custom"

const doulas = [
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 5, img: 'https://i.pravatar.cc/150?img=12' },
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 4.5, img: 'https://i.pravatar.cc/150?img=2' },
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 1, img: 'https://i.pravatar.cc/150?img=15' },
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 2, img: 'https://i.pravatar.cc/150?img=13' },
]

export default function DoulaContainer() {
    const nav = useNavigate()
    return (<>
        <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Doulas near you</p>
        <Scrollbar style={{ width: '100%', height: 250 }}>
            <div className="gap-4 flex flex-row my-5 px-2">
                {doulas.map((doula, index) => (
                    <DoulasCard
                        key={index}
                        title={doula.text}
                        subTitle={doula.subText}
                        rateStar={doula.rate}
                        img={doula.img}
                        onClick={() => nav(`/home/doula-profile/${index}`)}
                    />
                ))}
            </div>
        </Scrollbar>
    </>)
}