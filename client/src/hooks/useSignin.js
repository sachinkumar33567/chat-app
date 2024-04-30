import { useState } from "react"
import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSignin = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const signin = async (formData) => {
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(formData)
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error)

            // Save the user to localStorage
            localStorage.setItem('user', JSON.stringify(data))

            // Update Auth Context
            setAuthUser(data)
        } catch (error) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }

    return {loading, signin}
}

export default useSignin