import Navbar from "@/components/navBar"
import ErrorPages from "@/components/custom/error_page"

export default function NotFound() {
    return (
        <main className="lg:pb-28 pb-96 overflow-x-hidden">
            <div className="pt-16">
                <Navbar />
            </div>
            <div className="pt-10 pb-10">
                <ErrorPages />
            </div>
        </main>
    )
}