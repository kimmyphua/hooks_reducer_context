import React, {useContext} from 'react'
import { UserContext } from './context/ThemeContext'



function UserProfile() {
    const {setUser} = useContext(UserContext)
    return (
        <div>
            I'm the user profile
            <p> <button className="btn bg-warning" 
            onClick={()=>setUser({name : 'Andy', gender: 'male'})}>Change User from Profile</button>
       </p>
        </div>
    )
}

export default UserProfile
