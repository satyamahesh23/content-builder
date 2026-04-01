import React from "react";

const Palette = ({ addBlock }) => {
  return (
    <div className="palette">
      <h3>Components</h3>

      <button onClick={() => addBlock("header")}>➕ Header</button>
      <button onClick={() => addBlock("text")}>📝 Text</button>
      <button onClick={() => addBlock("image")}>🖼️ Image</button>
    </div>
  );
};

export default Palette;