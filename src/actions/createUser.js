// - react-router-dom
import { redirect } from 'react-router-dom'
// - library
import { toast } from 'react-toastify'

export async function createUser({ request }) {
    // - formData from the form submission
    const data = await request.formData()
    const formData = Object.fromEntries(data)
    try {
        localStorage.setItem("username", formData.username)
        toast.success(`Welcome ${formData.username}`)
    } catch (error) {
        throw new Error("There was a problem creating your account")
    }
    return redirect("/")
}   
