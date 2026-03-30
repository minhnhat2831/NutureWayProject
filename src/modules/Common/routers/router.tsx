import PageLayout from "@/layout/PageLayout";
import { Route, Routes } from "react-router";
import ArticlePage from "../article/page/ArticlePage";
import HomePage from "../home/page/HomePage";
import SettingPage from "../setting/page/SettingPage";
import CarePage from "../care/page/CarePage";
import ChatPage from "../chat/page/ChatPage";

export default function PageRouter() {
    return (<>
        <Routes>
            <Route path="/"
                element={
                    <PageLayout>
                        <HomePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/article"
                element={
                    <PageLayout>
                        <ArticlePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/settings"
                element={
                    <PageLayout>
                        <SettingPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/care"
                element={
                    <PageLayout>
                        <CarePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/message"
                element={
                    <PageLayout>
                        <ChatPage />
                    </PageLayout>
                }>
            </Route>
        </Routes>
    </>)
}