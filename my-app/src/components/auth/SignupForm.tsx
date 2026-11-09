import { createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { auth } from "@/lib/firebase"

export default function SignupForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    async function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
        // 1. Validate inputs
        event.preventDefault()
        if (email === "" || password === "") {
            setError("Please enter both your email and password.")
            return
        }
        setError("")

        //more validation to come in the future

        // 2. register
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;

    }



}