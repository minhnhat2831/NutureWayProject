import Scrollbar from "react-scrollbars-custom"
import useCategory from "../hooks/useCategory"
import CategoriesCard from "@/components/shared/CategoriesCard"
import { Icons } from "@/components/common/Icons"

const category = [
    { slug: 'Prenatal', icon: <Icons.addIcon /> },
    { slug: 'Labour', icon: <Icons.homeIcon /> },
    { slug: 'Postnatal', icon: <Icons.calendarIcon /> },
    { slug: 'End of Life Care', icon: <Icons.messageIcon /> },
    { slug: 'Postnatal', icon: <Icons.calendarIcon /> },
]

export default function CategoryContainer() {
    const { useGetListCategory } = useCategory()
    const { data,  loading } = useGetListCategory()

    return (
        <>
            <p className="px-2 text-2xl text-gray-400 font-serif mt-5">Popular Categories</p>
            <Scrollbar style={{ width: '100%', height: 190 }}>
                <div className="gap-4 flex flex-row flex-nnowrap my-5 px-2">
                    {data.map((cate, index) => (
                        <CategoriesCard
                            key={index}
                            text={cate.slug}
                            icons={<Icons.addIcon />}
                            loading={loading}
                            onClick={() => alert(`u click ${index}`)}
                        />
                    ))}
                </div>
            </Scrollbar>

        </>
    )
}