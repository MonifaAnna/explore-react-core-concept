import { useState } from "react"

export default function Team(){
    const [team,setTeam] = useState(11); //state declare---------

    const addPlayers = () =>{
        const addPlayer = team + 1;
        setTeam(addPlayer)

        //----or use this to shortcut--------
        
        // setTeam(team + 1)
    }

    const removePlayers = () =>{
        const removePlayer = team - 1;
        setTeam(removePlayer)
    }

    //------style-----------------

    const teamStyle = {
        border:'2px solid purple',borderRadius:'20px',margin:'20px',padding:'20px'
    }

    return (
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={addPlayers}>Add Players</button>
            <button onClick={removePlayers}>Remove Players</button>
        </div>
    )
}