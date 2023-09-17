// - rrd
import { redirect } from "react-router-dom"
// - helpers
import { deleteData } from "../helpers/helpers"
// - library
import { toast } from "react-toastify"


export const logoutAction = async () => {

    // - delete user
    deleteData({
        key: "username"
    })
    deleteData({
        key: "budgets"
    })
    deleteData({
        key: "expenses"
    })
   
    toast.success("You have deleted your account!")

    return redirect("/")
}
