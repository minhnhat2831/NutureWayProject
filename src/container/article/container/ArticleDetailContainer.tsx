import { Icons } from "@/components/common/Icons";
import Header from "@/layout/HeaderLayout";
import useArticle from "../hook/useArticle";
import { useParams } from "react-router";
import { formatDate } from "@/utils/FormatDate";

export default function ArticleDetailContainer() {
    const { id } = useParams<{ id: string }>()
    const { useGetArticleDetail, postFavorite, deleteFavorite } = useArticle()
    const { data, loading } = useGetArticleDetail(id ?? '');
    const { onSubmit : favorite, loading : loadingFavorite } = postFavorite()
    const { onSubmit : unfavorite, loading : loadingUnFavorite } = deleteFavorite()

    if (loading) {
        return <div className="h-screen bg-white flex flex-col justify-center items-center">
            <Icons.buttonIcon />
        </div>
    }

    const loadingFU = loadingFavorite || loadingUnFavorite

    const handleClick = () => {
        if(data?.isFavorite){
            unfavorite(id ?? '')
        }
        if(data?.isFavorite === false){
            favorite({
                id : id ?? '',
                status : true
            })
        }
    }

    return (<>
        <Header
            showBack
            iconR1={(data?.isFavorite ? <Icons.starNoColorIcon /> : <Icons.starIcon />)}
            disableIconR1={loadingFU}
            iconR2={<Icons.shareIcon />}
            onClickIconR1={() => handleClick()}
        />
        <div className="h-screen bg-white overflow-y-auto">
            <div className="mb-5">
                <div className="px-2 my-5">
                    <h1 className="text-xl font-semibold leading-6">{data?.title}</h1>
                    <p className="text-gray-400 leading-5 font-normal">{data?.author} * {formatDate(data?.createdAt)}</p>
                </div>
                <img src={data?.picture?.uri ?? 'https://placehold.co/393x180'} alt="picture" className="w-100 h-45 border border-gray-300" />
                <div className="px-4 my-4 font-serif wrap-break-word">
                    <h2 className="font-semibold leading-6 text-lg mb-2">{data?.title}</h2>
                    <article className="font-normal text-sm leading-6">
                        {data?.content}
                    </article>
                </div>
            </div>
        </div>
    </>)
}