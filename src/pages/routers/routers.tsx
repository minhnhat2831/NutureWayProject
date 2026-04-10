import PageLayout from "@/layout/PageLayout";
import { Route, Routes } from "react-router";
import SettingPage from "../settings/SettingPage";
import CarePage from "../care/CarePage";
import ChatPage from "../chat/ChatPage";
import HomePage from "@/pages/HomePage";
import ArticleDetailPage from "../ArticleDetailPage";
import SearchPage from "../SearchPage";
import ChatDetailPage from "../chat/ChatDetailPage";
import CareDetailPage from "../care/CareDetailPage";
import DoulaProfilePage from "../doula/DoulaProfilePage";
import CarePackageDetailPage from "../care/CarePackageDetailPage";
import HelpCenterPage from "../settings/HelpCenterPage";
import ImageAndVideoPage from "../care/ImageAndVideoPage";
import DocumentPage from "../care/DoucumentPage";
import MedicationPage from "../care/MedicationPage";
import NotesPage from "../care/NotesContainer";
import NutritrionPage from "../care/NutritionPage";
import PackageDetailPage from "../care/PackageDetailPage";
import AppointmentPage from "../appointment/AppointmentPage";

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
            <Route path="/care/:id"
                element={
                    <PageLayout>
                        <CareDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/care/care-package"
                element={
                    <PageLayout>
                        <CarePackageDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/care/care-package"
                element={
                    <PageLayout>
                        <CarePackageDetailPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/care/imageVideo"
                element={
                    <PageLayout>
                        <ImageAndVideoPage />
                    </PageLayout>
                }>
            </Route>
            <Route path="/care/documents"
                element={
                    <PageLayout>
                        <DocumentPage />
                    </PageLayout>}>
            </Route>
            <Route path="/care/medication"
                element={
                    <PageLayout>
                        <MedicationPage />
                    </PageLayout>}>
            </Route>
            <Route path="/care/notes"
                element={
                    <PageLayout>
                        <NotesPage />
                    </PageLayout>}>
            </Route>
            <Route path="/care/nutrition"
                element={
                    <PageLayout>
                        <NutritrionPage />
                    </PageLayout>}>
            </Route>
            <Route path="/care/package-detail/:id"
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
        </Routes>
    </>)
}