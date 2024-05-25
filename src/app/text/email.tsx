"use client"
import React, { useState } from 'react'

function page() {
  const [firstName, setFirstName] = useState ("")
  const [lastName, setLastName] = useState ("")
  const [email, setEmail] = useState ("")
  const [display, setDisplay] = useState(false)
  const clearData = ()=>{
    setFirstName("")
    setLastName("")
    setEmail("")
    setDisplay(false)
  }
  const handleSubmit = ()=>{
    if(!firstName||!lastName||!email){
      setDisplay(false)
      alert("All fields are required")
    } else{
      setDisplay(true)
    }
  }
  return (
    <div>
      <input type="text" value={firstName} onChange={(event)=>setFirstName(event.target.value)} placeholder='Enter First Name'/>
      <input type="text" value={lastName} onChange={(event)=>setLastName(event.target.value)} placeholder='Enter Last Name'/>
      <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Enter Email'/>
      <button onClick={handleSubmit}>submit</button>
      <button onClick={clearData}>clear data</button>
     { display? <div>
        <li>First Name: {firstName}</li>
        <li>Last Name: {lastName}</li>
        <li>Email: {email}</li>
      </div>: <p>no data</p>}
    </div>
  )
}

export default page