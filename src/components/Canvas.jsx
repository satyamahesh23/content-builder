import React, { useState } from "react";
import HeaderBlock from "./HeaderBlock";
import TextBlock from "./TextBlock";
import ImageBlock from "./ImageBlock";

const Canvas = ({ blocks, updateBlock, setBlocks, deleteBlock }) => {

  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => setDragIndex(index);
  const handleDragOver = (e) => e.preventDefault();

  const handleDrop = (index) => {
    const newBlocks = [...blocks];
    const dragged = newBlocks.splice(dragIndex, 1)[0];
    newBlocks.splice(index, 0, dragged);
    setBlocks(newBlocks);
  };

  // 👉 empty state
  if (blocks.length === 0) {
    return <div className="canvas"><h2>🧩 Builder</h2><p className="empty">Add components from left 👈</p></div>;
  }

  return (
    <div className="canvas">
      <h2>🧩 Builder</h2>

      {blocks.map((block, index) => {
        let Component;

        if (block.type === "header") Component = HeaderBlock;
        if (block.type === "text") Component = TextBlock;
        if (block.type === "image") Component = ImageBlock;

        return (
          <div
            key={block.id}
            className="block"
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {/* DELETE BUTTON */}
            <button 
              className="delete-btn"
              onClick={() => deleteBlock(block.id)}
            >
              ❌
            </button>

            <Component block={block} updateBlock={updateBlock} />
          </div>
        );
      })}
    </div>
  );
};

export default Canvas;