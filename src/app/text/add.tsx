"use client"
import { useState } from "react";


export default function Home() {
  const [number,setNumber]=useState(0)
  return (
   <div><h1>{number}</h1>
   <button onClick={()=>setNumber(number+5)}>add</button>
   
   <button onClick={()=>setNumber(number-3)}>subtract</button>
   </div>
  );
}

