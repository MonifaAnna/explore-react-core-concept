

//1.declare a state to hold the data
//2.useEffect with call back and dependancy array
//3.use the fetch to load data
//4.set loaded data to state
//5.display data

import { useEffect, useState } from "react"
import './friends.css'
import Friend from "./Friend"




export default function Friends(){

    const [friend,setFriend] = useState([])

    //-------data load----------

    useEffect(()=>{

       fetch('https://jsonplaceholder.typicode.com/users') 
       .then(res => res.json())
       .then(data => setFriend(data))
    },[])

    return (
        <div className="box">
            <h1>Show Data From API</h1>
            <h2>Friends:{friend.length}</h2>
            {
                friend.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}

