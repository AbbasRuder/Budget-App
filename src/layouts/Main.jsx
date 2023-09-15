// - react-router-dom
import { Outlet, useLoaderData } from "react-router-dom"

// - helpers
import { fetchData } from "../helpers/helpers"

// - assets
import wave from "../assets/wave.svg"

// - components
import Nav from "../components/Nav"


export const mainLoader = () => {
    const username = fetchData("username")
    return { username }
}

export default function Main() {
    const { username } = useLoaderData()

    return (
        <>
            <div className="layout">
                < Nav username={username}/>
                <main>
                    <Outlet />
                </main>
                <img src={wave} alt="" />
            </div>
        </>
    )
}
