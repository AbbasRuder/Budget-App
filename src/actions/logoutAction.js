// - rrd
import { redirect } from "react-router-dom"
// - helpers
import { deleteData } from "../helpers/localStorage"

export const logoutAction = async () => {

    // - delete user
    deleteData({
        key: "username"
    })

    return redirect("/")
}
