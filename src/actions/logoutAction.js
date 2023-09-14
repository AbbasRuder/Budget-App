// - rrd
import { redirect } from "react-router-dom"
// - helpers
import { deleteData } from "../helpers/localStorage"
// - library
import { toast } from "react-toastify"


export const logoutAction = async () => {

    // - delete user
    deleteData({
        key: "username"
    })
   
    toast.success("You have deleted your account!")

    return redirect("/")
}
