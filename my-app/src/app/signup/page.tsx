import SignUpForm from "@/components/auth/SignupForm"
import Navbar from "@/components/basicsupdated/Navbar"

export default function SignUpPage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />
            <section className="flex-1 flex items-center justify-center">
                <SignUpForm />
            </section>
        </main>
    )
}