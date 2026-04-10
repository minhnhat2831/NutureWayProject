import Header from "@/layout/HeaderLayout";

export default function CarePackageDetailContainer() {
    return (<>
        <div className="h-screen bg-white overflow-y-auto">
            <Header
                showBack
                title="Package Detail"
                titleAlign="center"
            />
            <img src='https://placehold.co/393x184' alt="picture"></img>
            <div className="px-4 my-8 font-serif">
                <h2 className="font-semibold text-lg leading-6">Comprehensice Birth Package</h2>
                <h3 className="font-normal text-gray-400 text-sm leading-5">In-depth birth plan consilation</h3>

                <div className="border-gray-300 border rounded-xl p-4 my-4">
                    <label className="font-medium text-sm leading-5">What's included</label>
                    <p className="text-sm text-gray-600 my-4 leading-5">1. Prenatal Care and Education : regular check-ups, ultrasounds and prenatal classes that edicate about pregnancy , labor, and delivery</p>
                    <p className="text-sm text-gray-600 my-4 leading-5">2. Labor and Delivery Support: This can include the services of a midwife or doula, who provides emotional and physical support during labor and delivery.</p>
                    <p className="text-sm text-gray-600 my-4 leading-5">3. Newborn Care Essentials: Supplies such as diapers, wipes, baby clothing, and swaddling blankets</p>
                </div>
            </div>
        </div>
    </>)
}