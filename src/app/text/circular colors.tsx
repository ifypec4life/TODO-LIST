"use client"

import React, { useState } from "react";

const Page = () => {
    const [color, setColor] = useState("yellow");
    const [colorName, setColorName] = useState("You clicked yellow");

    return (
        <div>
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <div style={{width: 100, height: 100, borderRadius: '50%', backgroundColor: color}}></div>
                <div style={{width: 100, height: 100, borderRadius: '50%', backgroundColor: color}}></div>
                <div style={{width: 100, height: 100, borderRadius: '50%', backgroundColor: color}}></div>
                <div style={{width: 100, height: 100, borderRadius: '50%', backgroundColor: color}}></div>
            </div>

            <div>
                <button onClick={() => {setColor("green"); setColorName("You clicked green");}}>Green</button>
                <button onClick={() => {setColor("blue"); setColorName("You clicked blue");}}>Blue</button>
                <button onClick={() => {setColor("yellow"); setColorName("You clicked yellow");}}>Yellow</button>
                <button onClick={() => {setColor("black"); setColorName("You clicked black");}}>Black</button>
            </div>
            <p>{colorName}</p>
        </div>
    );
}

export default Page;