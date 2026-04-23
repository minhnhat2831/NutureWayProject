import ArticleCard from "@/components/shared/ArticleCard"
import { useNavigate } from "react-router"
import Scrollbar from "react-scrollbars-custom"
import useArticle from "../hook/useArticle"
import { useAuthen } from "@/context/AuthContext"
import ArticleSkeleton from "../components/skeleton/ArticleSkeleton"

export default function ArticleContainer() {
    const nav = useNavigate()
    const { role } = useAuthen()
    const { useGetListArticle, useGetListPdSessions } = useArticle()
    const { data: articleData, loading: loadingArtical } = useGetListArticle()
    const { data: pdData, loading: loadingPd } = useGetListPdSessions()

    const loading = loadingArtical && loadingPd

    if (loading) {
        return <>
            {role === 'doula'
                ? <p className="px-2 text-2xl text-gray-400 font-serif mt-5">PD Sessions</p>
                : <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>}
            <div className="gap-4 flex flex-row my-5 px-2">
                {[1, 2].map((e) => (
                    <ArticleSkeleton key={e} />
                ))}
            </div>
        </>
    }

    return (<>
        {role === 'doula'
            ? <p className="px-2 text-2xl text-gray-400 font-serif mt-5">PD Sessions</p>
            : <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>}
        <Scrollbar style={{ width: '100%', height: 210 }}>
            <div className="gap-4 flex flex-row my-5 px-2">
                {(role === 'doula' ? pdData : articleData).map((al, index) => (
                    <ArticleCard
                        key={index}
                        text={al.title}
                        img={al?.picture?.uri}
                        onClick={() => nav(`/home/article/${al.id}`)}
                    />
                ))}
            </div>
            {(role === 'doula' ? pdData : articleData).length === 0 && <div className="px-4 mt-1 font-serif flex justify-center items-center">
                <p className="text-sm text-gray-500 text-center">No data available!</p>
            </div>}
        </Scrollbar>
    </>)
}