import React from "react";

const TextBlock = ({ block, updateBlock }) => {
  return (
    <div>
      <label>Text:</label>

      <textarea
        placeholder="Write something..."
        value={block.content}
        onChange={(e) => updateBlock(block.id, e.target.value)}
      />
    </div>
  );
};

export default TextBlock;