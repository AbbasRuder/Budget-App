// react-router-dom
import { useLoaderData } from "react-router-dom"

// helpers
import { fetchData } from "../helpers/localStorage"


export const dashboardLoader = () => {
    const username = fetchData("username")
    return { username }
}

export default function Dashboard() {
    const { username }  = useLoaderData()
    
  return (
    <div>Hello {username}</div>
  )
}
