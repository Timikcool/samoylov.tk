import React from 'react'

const experienceItem = ({name, tools, role, description, responsibilities}) => {
  return (
    <div className="experience-item">
      <h4 className="name">{name}</h4>
      <p className="tools">{tools}</p>
      <p className="role">{role}</p>
      <p className="description">{description}</p>
    </div>
  )
}

export default experienceItem
