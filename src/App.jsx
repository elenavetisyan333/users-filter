import { useState, useEffect } from 'react'
import './App.css'
import users from './Users'

function App() {
    const [part, setPart] = useState("");

    return(
        <>
            <input type="text" name="part" id="part" value={part} onChange={(e) => {setPart(e.target.value)}}/>
            <div id="users">
                {
                    users.map(user =>{
                        return user.name.toLowerCase().includes(part) ? <p key={`user-${user.name}`}>{user.name}</p> : "";
                    })
                }
            </div>
        </>
    )
}

export default App
