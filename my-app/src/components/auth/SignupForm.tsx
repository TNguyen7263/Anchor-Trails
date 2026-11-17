"use client"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { auth } from "@/lib/firebase"
import { Label } from "@/components/basics/label"
import { Input } from "@/components/basics/input"
import { Button } from "@/components/basics/button"

export default function SignupForm() {
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
        setError("no Error")

        //more validation to come in the future

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // 3. Handle successful login (redirects)
            router.push("/")
        } catch (err: any) {
            // 4. Handle registration errors
            switch (err.code) {
                case "auth/email-already-in-use":
                    setError("An account with this email already exists.")
                    break
                case "auth/weak-password":
                    setError("Password should be at least 6 characters.")
                    break
                case "auth/invalid-email":
                    setError("Please enter a valid email address.")
                    break
                default:
                    setError("An unexpected error occurred. Please try again.")
            }
        }
    }

    return (
        <form className="w-full max-w-md rounded-xl border p-8" onSubmit={handleSubmit}>
            <h1> Let's get to know each other ^-^</h1>

            {/* space for email */}
            <div className="flex flex-col gap-4">

                <div className="flex">
                    {/* placeholder for email */}
                    <Label htmlFor="email" className="w-32">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 rounded border"
                        value={email}
                        onChange={(event => setEmail(event.target.value))} />

                </div>

                {/*placeholder for password */}
                <div className="flex">
                    <Label htmlFor="password" className="w-32">Password:</Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="flex-1 rounded border"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
            </div>
            {error && (
                <p className="flex justify-center mt-4 text-sm text-red-500">
                    {error}
                </p>
            )}

            <div className="flex justify-center mt-6">
                <Button type="submit">Sign Up</Button>
            </div>

        </form>
    )
}