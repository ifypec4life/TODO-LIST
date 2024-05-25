"use client";
import { useState } from "react";
export default function Home() {
  const [todoInput, setTodoInput] = useState('');
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Todo List</h2>
      <div
        style={{
          width: 200,
          height: 300,
          border: "1px solid",
          margin: "0px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* input container */}
       
          <button style={{ width: 20 }}>+</button>
        </div>
        <h3>{todoInput}</h3>
      </div>
    </div>
  );
}