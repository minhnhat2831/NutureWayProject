import DoulasCard from "@/components/shared/DoulasCard"
import { useNavigate } from "react-router"
import Scrollbar from "react-scrollbars-custom"
import useDoula from "../hook/useDoula"
import { Icons } from "@/components/common/Icons"

export default function DoulaContainer() {
    const nav = useNavigate()
    const { useGetDoulaNear } = useDoula()
    const { data , loading } = useGetDoulaNear()

    if(loading){
        return<>
            <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Doulas near you</p>
            <div className="flex flex-col justify-center items-center p-20"><Icons.buttonIcon /></div>
        </>
    }
    
    return (<>
        <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Doulas near you</p>
        <Scrollbar style={{ width: '100%', height: 250 }}>
            <div className="gap-4 flex flex-row my-5 px-2">
                {data.map((doula, index) => (
                    <DoulasCard
                        key={index}
                        title={doula?.user?.fullName}
                        subTitle={doula.title}
                        rateStar={doula.starAvg}
                        img={doula?.picture?.uri}
                        onClick={() => nav(`/home/doula-profile/${doula.id}`)}
                    />
                ))}
                {data.length === 0 && [1,2,3].map((index) => (
                    <DoulasCard
                        key={index}
                        title={'####'}
                        subTitle={'####'}
                        rateStar={0}
                        img={''}
                        onClick={() => nav(``)}
                    />
                ))}
            </div>
        </Scrollbar>
    </>)
}