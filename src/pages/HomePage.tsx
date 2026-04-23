import ArticleContainer from "@/container/article/container/ArticleContainer";
import ArticalDoulaContainer from "@/container/article/container/ArticleDoulaContainer";
import CategoryContainer from "@/container/categories/container/CategoryContainer";
import DoulaContainer from "@/container/doulas/container/DoulaContainer";
import HomeContainer from "@/container/home/HomeContainer";
import { useAuthen } from "@/context/AuthContext";
import { SearchBar } from "@/layout/HeaderLayout";
import { useNavigate } from "react-router";
import Scrollbar from "react-scrollbars-custom";

export default function HomePage() {
    const nav = useNavigate()
    const { role } = useAuthen()
    return (
        <HomeContainer>
            <SearchBar
                onClickSearch={() => nav('/home/search')}
                value={''}
                onChange={() => { }}
                onClear={() => { }}
                placeholder={'Search for doulas, articles, anything,...'}

            />
            {role === 'user' &&
                <Scrollbar style={{ width: '100%', height: '100%' }}>
                    <CategoryContainer />
                    <DoulaContainer />
                    <ArticleContainer />
                </Scrollbar>}

            {role === 'doula' &&
                <Scrollbar style={{ width: '100%', height: '100%' }}>
                    <ArticleContainer />
                    <ArticalDoulaContainer />
                </Scrollbar>}
        </HomeContainer>
    )
}