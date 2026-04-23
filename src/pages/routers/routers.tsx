import PageLayout from "@/layout/PageLayout";
import { Route, Routes } from "react-router";
import SettingPage from "../settings/SettingPage";
import CarePage from "../care/CarePage";
import ChatPage from "../chat/ChatPage";
import HomePage from "@/pages/HomePage";
import ArticleDetailPage from "../ArticleDetailPage";
import SearchPage from "../SearchPage";
import ChatDetailPage from "../chat/ChatDetailPage";
import DoulaProfilePage from "../doula/DoulaProfilePage";
import HelpCenterPage from "../settings/HelpCenterPage";
import ImageAndVideoPage from "../detail/ImageAndVideoPage";
import DocumentPage from "../detail/DoucumentPage";
import MedicationPage from "../detail/MedicationPage";
import NotesPage from "../detail/NotesContainer";
import NutritrionPage from "../detail/NutritionPage";
import PackageDetailPage from "../care/PackageDetailPage";
import AppointmentPage from "../appointment/AppointmentPage";
import NotFoundPage from "../NotFoundPage";
import CategoryDetailPage from "../CategoryDetailPage";
import CareRoute from "@/container/care/router/route";
import DetailPage from "../detail/DetailPage";

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
            <Route path="/package"
                element={
                    <PageLayout>
                        <CareRoute />
                    </PageLayout>
                }>
            </Route>
            <Route path="/category/:id"
                element={
                    <PageLayout>
                        <CategoryDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/article/:id"
                element={
                    <PageLayout>
                        <ArticleDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/doula-profile/:id"
                element={
                    <PageLayout>
                        <DoulaProfilePage />
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
            <Route path="/settings/help-center"
                element={
                    <PageLayout>
                        <HelpCenterPage />
                    </PageLayout>
                }></Route>
            <Route path="/care"
                element={
                    <PageLayout>
                        <CarePage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/detail/:id"
                element={
                    <PageLayout>
                        <DetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/detail/imageVideo"
                element={
                    <PageLayout>
                        <ImageAndVideoPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/detail/documents"
                element={
                    <PageLayout>
                        <DocumentPage />
                    </PageLayout>}>
            </Route>
            <Route path="/detail/medication/:id"
                element={
                    <PageLayout>
                        <MedicationPage />
                    </PageLayout>}>
            </Route>
            <Route path="/detail/notes"
                element={
                    <PageLayout>
                        <NotesPage />
                    </PageLayout>}>
            </Route>
            <Route path="/detail/nutrition"
                element={
                    <PageLayout>
                        <NutritrionPage />
                    </PageLayout>}>
            </Route>
            <Route path="/package-details/:id"
                element={
                    <PageLayout>
                        <PackageDetailPage />
                    </PageLayout>}>
            </Route>
            <Route path="/care/appointment"
                element={
                    <PageLayout>
                        <AppointmentPage />
                    </PageLayout>}>
            </Route>
            <Route path="/message"
                element={
                    <PageLayout>
                        <ChatPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/search"
                element={
                    <PageLayout>
                        <SearchPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/message/:id"
                element={
                    <PageLayout>
                        <ChatDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="*"
                element={
                    <PageLayout>
                        <NotFoundPage />
                    </PageLayout>
                } />
        </Routes>
    </>)
}