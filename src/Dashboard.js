
import { UserContext ,UserProvider} from './context/ThemeContext'
import UserProfile from './UserProfile'
import React, {useContext, useMemo, useState} from 'react'
import { useTheme, useThemeUpdate } from './context/ThemeContext';
import { Button } from "react-bootstrap";

function Dashboard() {
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor : darkTheme ? '#333' : '#CCC',
        color: darkTheme ? '#333' : '#CCC',
        padding: '2rem',
        margin: '2rem',
        color:  darkTheme ? '#CCC' : '#333'
    }

    const {user, setUser} = useContext(UserContext)
    const [number, setNumber] = useState(0)
    const doubleNumber = slowFunction(number)

    function slowFunction(num){
    console.log('slowslowlsow')
    for(let i =0; i <10000000000 ; i++){
        return num * 2
    }
    }

    return (
        <>
        <div style={themeStyles}>
           <p> {user.name} is a {user.gender}</p>
             <p> <UserProfile /></p>   
           <button onClick={()=>setUser({name: 'Annie', gender : 'female'})}> Change User from Dashboard</button>
            <p>
                <input type="number" valuer={number} onChange={e=> setNumber(parseInt(e.target.value))} />
            </p>
            <h3>{doubleNumber}</h3>
         <p> <Button onClick={toggleTheme}> TOGGLE </Button></p>
         </div>
        </>
    )
}

export default Dashboard
