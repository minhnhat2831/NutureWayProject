import HomeContainer from "@/container/home/HomeContainer";
import { SearchBar } from "@/layout/HeaderLayout";
import { useNavigate } from "react-router";

export default function HomePage() {
    const nav = useNavigate()
    return (
        <HomeContainer>
            <SearchBar
                onClickSearch={() => nav('/home/search')}
                value={''}
                onChange={() => { }}
                onClear={() => { }}
                placeholder={'Search for doulas, articles, anything,...'}
            />
        </HomeContainer>
    )
}