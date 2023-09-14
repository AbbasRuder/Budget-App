
import { Form } from 'react-router-dom'

import {UserPlusIcon} from '@heroicons/react/24/solid'

import illustration from "../assets/illustration.jpg"

export default function Intro() {
    return (
        <div className="intro">
            <div>
                <h1>Take control of <span className='accent'>your money</span></h1>
                <p>Personal budgeting is the secret of financial freedom. Start your journey today.</p>
                <Form method='post' action='/create-user'>
                    <input 
                        type="text" 
                        name='username' 
                        placeholder='Enter your name' 
                        required
                        autoComplete='given-name'
                    />
                    <button type='submit' className="btn btn--dark">
                        <span>Create Account</span>
                        <UserPlusIcon width={20}/>
                    </button>
                </Form>
            </div>
            <img src={illustration} alt="" width={600} />
        </div>
    )
}
