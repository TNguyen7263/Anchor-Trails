import { useState } from "react"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"
import { Button } from "@/components/basics/button"
import { Input } from "@/components/basics/input"
import { Label } from "@/components/basics/label"
import { auth } from "@/lib/firebase"



export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const router = useRouter()

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        // 1. Validate inputs
        event.preventDefault()
        if (email === "" || password === "") {
            setError("Please enter both your email and password.")
            return
        }
        setError("")

        // 2. Attempt Firebase authentication
        try {
            await signInWithEmailAndPassword(auth, email, password)
            // 3. Handle successful login
            router.push("/")

        } catch (err: any) {
            // 4. Handle authentication errors
            switch (err.code) {
                case "auth/invalid-credential":
                case "auth/wrong-password":
                case "auth/user-not-found":
                    setError("Invalid email or password.")
                    break
                case "auth/too-many-requests":
                    setError("Access temporarily blocked due to many failed logins. Try again later.")
                    break
                default:
                    setError("An unexpected error occurred. Please try again.")
            }
        }
    }

    return (
        <form className="w-full max-w-md rounded-xl border p-8" onSubmit={handleSubmit}>
            <h1> Welcome back :D</h1>

            <div className="flex flex-col gap-4">

                <div className="flex">
                    <Label htmlFor="email" className="w-32">Username/Email:</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 rounded border"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div className="flex">
                    <Label htmlFor="password" className="w-32">Password:</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="flex-1 rounded border"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>

            </div>

            {error && (
                <p className="flex justify-center mt-4 text-sm text-red-500">
                    {error}
                </p>
            )}

            <div className="flex justify-center mt-6">
                <Button type="submit">Login</Button>
            </div>

        </form>
    );
}

