import ArticleCard from "@/components/shared/ArticleCard"
import { useNavigate } from "react-router"
import Scrollbar from "react-scrollbars-custom"
import useArticle from "../hook/useArticle"
import { Icons } from "@/components/common/Icons"


export default function ArticleContainer() {
    const nav = useNavigate()
    const { useGetListArticle } = useArticle()
    const { data, loading } = useGetListArticle()

    if(loading) return <div><Icons.buttonIcon /></div>
    return (<>
        <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>
        <Scrollbar style={{ width: '100%', height: 250 }}>
            <div className="gap-4 flex flex-row my-5 px-2">
                {data.map((al, index) => (
                    <ArticleCard
                        key={index}
                        text={al.title} 
                        img={''}
                        onClick={() => nav('/home/article')}
                    />
                ))}
            </div>
        </Scrollbar>
    </>)
}