import React from "react";

const HeaderBlock = ({ block, updateBlock }) => {
  return (
    <div>
      <label>Header:</label>

      <input
        type="text"
        placeholder="Enter heading..."
        value={block.content}
        onChange={(e) => updateBlock(block.id, e.target.value)}
        style={{ fontSize: "18px", fontWeight: "bold" }}
      />
    </div>
  );
};

export default HeaderBlock;