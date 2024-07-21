
import React from 'react'
const players=[
    {
        id:2,
        name:"abc",
        score:"01:02:03"
    },
    {
        id:1,
        name:"bsd",
        score:"01:02:03"
    }
]

const PlayerList = () => {
  const sortedPlayerList=players.sort((a,b)=>(a.id>b.id?1:-1))
  return (
    <div>
    {sortedPlayerList.map((player)=>(
   
        <div className='flex gap-2 even:bg-gray-400 odd:bg-yellow-400'>
        <p>{player.name}</p>
        <p>{player.score}</p>
        </div>
    ))}
    
    </div>
  )
}

export default PlayerList