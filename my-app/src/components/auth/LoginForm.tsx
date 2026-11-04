"use client"
import { useState } from "react"
import { Button } from "@/components/basics/button"
import { Input } from "@/components/basics/input"
import { Label } from "@/components/basics/label"


export default function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        // 1. Validate inputs
        event.preventDefault()
        if (email === "" || password === "") {
            setError("Please enter both your email and password.")
            return
        }
        setError("")

        // 2. Attempt Firebase authentication
        // 3. Handle successful login
        // 4. Handle authentication errors

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

