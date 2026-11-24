import LoginForm from "@/components/auth/LoginForm"
import Navbar from "@/components/basicsupdated/Navbar"

export default function LoginPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <section className="flex-1 flex items-center justify-center">
                <LoginForm />
            </section>

        </main>
    );
}