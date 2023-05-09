import React, { useState } from "react";
import "./index.css";

export const Dummy = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="wpr">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? "Collapse" : "Expand"}
      </button>
      <div className={`content ${isOpen ? "animate" : ""}`}>Content ...</div>
    </div>
  );
};
