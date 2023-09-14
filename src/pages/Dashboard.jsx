// - react-router-dom
import { useLoaderData } from "react-router-dom"

// - helpers
import { fetchData } from "../helpers/localStorage"

// - components
import Intro from "../components/Intro"


export const dashboardLoader = () => {
  const username = fetchData("username")
  return { username }
}


export default function Dashboard() {
  // - receive data from the loader
  const { username } = useLoaderData()

  return (
    <>
      {username ? <p>{ username }</p> : <Intro />}
    </>
  )
}
