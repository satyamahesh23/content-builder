import React from "react";

const ImageBlock = ({ block, updateBlock }) => {
  return (
    <div>
      <label>Image URL:</label>

      <input
        type="text"
        placeholder="Paste image URL..."
        value={block.content}
        onChange={(e) => updateBlock(block.id, e.target.value)}
      />

      {block.content && (
        <div className="image-preview">
          <img src={block.content} alt="preview" />
        </div>
      )}
    </div>
  );
};

export default ImageBlock;