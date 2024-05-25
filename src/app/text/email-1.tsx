"use client"
import React, { useState } from 'react'

function page() {
  const [firstName, setFirstName] = useState ("")
  const [lastName, setLastName] = useState ("")
  const [email, setEmail] = useState ("")
  const [display, setDisplay] = useState (false)
  return (
    <div>
      <input type="text" value={firstName} onChange={} placeholder='Enter First Name'/>
      <input type="text" value={lastName} placeholder='Enter Last Name'/>
      <input type="text" value={email} placeholder='Enter Email'/>
      <button>submit</button>
      { display? <div>
        <li>First Name: {firstName}</li>
        <li>last Name: {lastName}</li>
        <li>Email: {email}</li>
      </div>: <p>no data</p>

      }
    </div>
  )
}

export default page
