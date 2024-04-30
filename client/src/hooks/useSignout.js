import toast from "react-hot-toast"
import { useAuthContext } from "../context/AuthContext"

const useSignout = () => {
    const {setAuthUser} = useAuthContext()

    const signout = async () => {
        try {
            const res = await fetch('/api/auth/signout')
            const data = await res.json()
            if (data.error) throw new Error(data.error)

            // Remove the user from localStorage
            localStorage.removeItem('user')

            // Update Auth Context
            setAuthUser(null)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return signout
}

export default useSignout