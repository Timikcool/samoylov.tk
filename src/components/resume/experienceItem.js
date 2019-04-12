import React from "react";
import "./experienceItem.scss";
const experienceItem = ({
  name,
  tools,
  role,
  description,
  status,
  responsibilities
}) => {
  return (
    <div className="experience-item">
      <h4 className="name">
        {name} <span className={`status ${status}`}>{status}</span>
      </h4>
      <p className="tools">{tools}</p>
      <p className="role">{role}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default experienceItem;
