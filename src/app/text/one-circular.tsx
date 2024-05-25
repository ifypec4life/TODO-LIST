"use client"
import { useState } from "react"

const page = ()=>{
    const [color, setColor] = useState ("yellow")
    const [colorName, setColorName] = useState ("you clicked yellow")
    const [colorMessage, setColorMessage] = useState ("white")
    // This is a function to change the color and colorName state
    const handleChangeColor = (colorText: string, colorType: string, textColor: string) => {
      setColor(colorType)
      setColorName(colorText)
      setColorMessage(textColor)
    }
    return <div>
        <div style={{width: 100, height: 100, borderRadius: 100, backgroundColor: color, display: "flex", alignItems: "center", justifyContent: "center"}}>
          <h5 style={{textAlign: "center", color: colorMessage}}>{colorName}</h5></div>
        <div>
            <button onClick={()=>handleChangeColor("you clicked green", "green", "white")}>Green</button>
            <button onClick={()=>handleChangeColor("you clicked blue", "blue", "white")}>Blue</button>
            <button onClick={()=>handleChangeColor("you clicked yellow", "yellow", "white")}>Yellow</button>
            <button onClick={()=>handleChangeColor("you clicked red", "red", "white")}>Red</button>
        </div>
    </div>
}

export default page