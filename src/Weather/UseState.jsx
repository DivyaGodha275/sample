import React from 'react'


import {usestate} from 'react'
const Usestate = () => {
    const[city,setCity] = usestate("Hyderabad")
console.log(city)
if(city ==="Hyderabad")
{
    setCity("Bangolore")
}

  return (
    <div>
      <h1>I live in{city}</h1>
    </div>
  )
}

export default Usestate
