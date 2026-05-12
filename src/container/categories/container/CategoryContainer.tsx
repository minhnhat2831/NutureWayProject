import Scrollbar from "react-scrollbars-custom"
import useCategory from "../hooks/useCategory"
import CategoriesCard from "@/components/shared/CategoriesCard"
import { useNavigate } from "react-router"
import CategoriesCardSkeleton from "../components/CategoriesCardSkeleton"

export default function CategoryContainer() {
    const { useGetListCategory } = useCategory()
    const { data, loading } = useGetListCategory()
    const nav = useNavigate()
    if (loading) {
        return <>
            <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Popular Categories</p>
            <div className="gap-4 flex flex-row flex-nowrap my-5 px-2">
                {[1,2,3,4].map((e) => (
                    <CategoriesCardSkeleton key={e} />
                ))}
            </div>
        </>
    }

    return (
        <>
            <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Popular Categories</p>
            <Scrollbar style={{ width: '100%', height: 190 }}>
                <div className="gap-4 flex flex-row flex-nowrap my-5 px-2">
                    {data.map((cate, index) => (
                        <CategoriesCard
                            key={index}
                            text={cate.name}
                            icons={cate.slug}
                            loading={!loading}
                            onClick={() => nav(`/home/category/${cate.id}`)}
                        />
                    ))}
                    {data.length === 0 && [1, 2, 3].map((index) => (
                        <CategoriesCard
                            key={index}
                            text={"###"}
                            icons={'#'}
                            loading={!loading}
                            onClick={() => nav(``)}
                        />
                    ))}
                </div>
            </Scrollbar>

        </>
    )
}