import Scrollbar from "react-scrollbars-custom"
import useCategory from "../hooks/useCategory"
import CategoriesCard from "@/components/shared/CategoriesCard"
import { Icons } from "@/components/common/Icons"

export default function CategoryContainer() {
    const { useGetListCategory } = useCategory()
    const { data, loading } = useGetListCategory()

    if(loading) return <div><Icons.buttonIcon /></div>

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
                            onClick={() => {}}
                        />
                    ))}
                </div>
            </Scrollbar>

        </>
    )
}