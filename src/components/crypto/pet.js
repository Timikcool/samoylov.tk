import React, { useState } from 'react';
export default ({ link, title }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={hovered ? 'clay' : ''}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      href={link}
    >
      {title}
    </a>
  );
};
