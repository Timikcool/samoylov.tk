import React, { useState } from 'react';

const CustomLabel = ({ text, className = '' }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <span
      className={hovered ? `clay ${className}` : className}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      {text}
    </span>
  );
};

export default CustomLabel;
