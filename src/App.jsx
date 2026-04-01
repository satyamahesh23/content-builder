import HeaderBlock from './components/HeaderBlock';
import './App.css'
import React, { useState, useEffect } from "react";
import Palette from "./components/Palette";
import Canvas from "./components/Canvas";

function App() {

  // 👉 state to store blocks
  const [blocks, setBlocks] = useState([]);

  // 👉 load saved data from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("blocks"));
    if (saved) setBlocks(saved);
  }, []);

  // 👉 save to localStorage whenever blocks change
  useEffect(() => {
    localStorage.setItem("blocks", JSON.stringify(blocks));
  }, [blocks]);

  // 👉 add new block
  const addBlock = (type) => {
    const newBlock = {
      id: Date.now(),
      type,
      content: ""
    };
    setBlocks([...blocks, newBlock]);
  };

  // 👉 update block content
  const updateBlock = (id, content) => {
    setBlocks(blocks.map(b => b.id === id ? { ...b, content } : b));
  };
  const deleteBlock=(id)=>{
    setBlocks(blocks.filter(b=>b.id!==id))
  }

  return (
    <div className="app">
    <Palette addBlock={addBlock} />
    <Canvas 
      blocks={blocks} 
      updateBlock={updateBlock} 
      setBlocks={setBlocks} 
      deleteBlock={deleteBlock}
    />
  </div>
   
  
  );
}

export default App;