
import React from 'react'
const players=[
    {
        id:1,
        name:"abc",
        score:"01:02:03"
    },
    {
        id:2,
        name:"bsd",
        score:"01:02:03"
    }
]

const PlayerList = () => {
  return (
    <div>
    {players.map((player)=>(
        <div className='flex gap-2'>
        <p>{player.name}</p>
        <p>{player.score}</p>
        </div>
    ))}
    
    </div>
  )
}

export default PlayerList