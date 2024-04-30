import { useState } from "react"
import toast from 'react-hot-toast'
import { useAuthContext } from "../context/AuthContext"

const useSignup = () => {
    const [loading, setLoading] = useState(false)
    const {setAuthUser} = useAuthContext()

    const signup = async (formData) => {
        const success = handleInputErrors(formData)
        if (!success) return
        try {
            setLoading(true)
            const res = await fetch('/api/auth/signup', {
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
            toast.error(error.messge)
        } finally {
            setLoading(false)
        }
    }

    return {loading, signup}
}

export default useSignup


const handleInputErrors = ({password, confirmPassword, gender}) => {
    if (password.length < 6) {
        toast.error('Password must be at least 6 characters!')
        return false
    }
    if (password !== confirmPassword) {
        toast.error('Password does not match!')
        return false
    }
    if (!gender) {
        toast.error('Select the gender as well!')
        return false
    }
    return true
}