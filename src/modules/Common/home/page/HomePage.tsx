import ArticleCard from "@/components/shared/ArticleCard";
import CategoriesCard from "@/components/shared/CategoriesCard";
import DoulasCard from "@/components/shared/DoulasCard";
import { Icons } from "@/components/common/Icons";
import { FooterClient, FooterDoula } from "@/layout/FooterLayout";
import Header from "@/layout/HeaderLayout";
import { Scrollbar } from 'react-scrollbars-custom';
import { useNavigate } from "react-router";
import { useAuthen } from "@/context/AuthContext";

const category = [
    { text: 'Prenatal', icon: <Icons.addIcon /> },
    { text: 'Labour', icon: <Icons.homeIcon /> },
    { text: 'Postnatal', icon: <Icons.calendarIcon /> },
    { text: 'End of Life Care', icon: <Icons.messageIcon /> },
    { text: 'Postnatal', icon: <Icons.calendarIcon /> },
]

const doulas = [
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 5, img: 'https://i.pravatar.cc/150?img=12' },
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 4.5, img: 'https://i.pravatar.cc/150?img=2' },
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 1, img: 'https://i.pravatar.cc/150?img=15' },
    { text: 'Nellie King', subText: 'Childbirth professional', rate: 2, img: 'https://i.pravatar.cc/150?img=13' },
]

const artical = [
    { text: 'How to create child birth', img: '' },
    { text: 'How to create child birth', img: '' },
    { text: 'How to create child birth', img: '' },
]

export default function HomePage() {
    const nav = useNavigate()
    const { role } = useAuthen()
    return (<>
        <Header title="NurtureWave" iconR1={<Icons.userIcon />} showSearch searchPlaceholder="Search for doulas, articles, anything,..." />
        <div className="h-screen bg-white px-2">
            <Scrollbar style={{ width: '100%', height: '100%' }}>
                <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Popular Categories</p>
                <Scrollbar style={{ width: '100%', height: 190 }}>
                    <div className="gap-4 flex flex-row flex-nnowrap my-5 px-2">
                        {category.map((cate, index) => (
                            <CategoriesCard
                                key={index}
                                text={cate.text}
                                icons={cate.icon}
                                onClick={() => alert(`u click ${index}`)}
                            />
                        ))}
                    </div>
                </Scrollbar>

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
                                onClick={() => alert(`u click ${index}`)}
                            />
                        ))}
                    </div>
                </Scrollbar>

                <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>
                <Scrollbar style={{ width: '100%', height: 250 }}>
                    <div className="gap-4 flex flex-row my-5 px-2">
                        {artical.map((al, index) => (
                            <ArticleCard
                                key={index}
                                text={al.text}
                                img={al.img}
                                onClick={() => nav('/home/article')}
                            />
                        ))}
                    </div>
                </Scrollbar>
            </Scrollbar>
        </div >
        {role === 'DOULAS' ? <FooterDoula /> : <FooterClient />}
    </>)
}