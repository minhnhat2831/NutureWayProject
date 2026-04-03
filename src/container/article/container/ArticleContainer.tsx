import ArticleCard from "@/components/shared/ArticleCard"
import { useNavigate } from "react-router"
import Scrollbar from "react-scrollbars-custom"
import useArticle from "../hook/useArticle"

const articles = [
    { text: 'How to create child birth', img: '' },
    { text: 'How to create child birth', img: '' },
    { text: 'How to create child birth', img: '' },
]

export default function ArticleContainer() {
    const nav = useNavigate()
    const { useGetListArticle } = useArticle()
    const { data, loading } = useGetListArticle()
    return (<>
        <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Articles</p>
        <Scrollbar style={{ width: '100%', height: 270 }}>
            <div className="gap-4 flex flex-row my-5 px-2">
                {data.map((al, index) => (
                    <ArticleCard
                        key={index}
                        text={al.name}
                        img={al.picture}
                        onClick={() => nav('/home/article')}
                    />
                ))}
            </div>
        </Scrollbar>
    </>)
}