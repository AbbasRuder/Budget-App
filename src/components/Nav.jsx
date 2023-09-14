// - assets
import Logomark from "../assets/logomark.svg"

// - react-router-dom
import { Form, NavLink } from "react-router-dom"

// - library
import { TrashIcon } from '@heroicons/react/24/solid'

export default function Nav({username}) {
  return (
    <>
        <nav>
            <NavLink
                to="/"
            >
                <img src={Logomark} alt="" />
                <span>HomeBudget</span>
            </NavLink>

          {username && (
            <Form
              method="Post"
              action="/logout"
              onSubmit={(event) => {
                if(!confirm("Confirm you want to delete the user")) {
                  event.preventDefault()
                } 
              }}
            >
              <button type="submit" className="btn btn--warning">
                <span>Delete User</span>
                <TrashIcon width={20}/>
              </button>
            </Form>
          )}
        </nav>
    </>

  )
}
