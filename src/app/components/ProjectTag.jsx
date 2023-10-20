import React from 'react'

const ProjectTag = ({name, onClick, isSelected }) => {

  const buttonStyles = isSelected ? "text-primary font-medium" : 'text-white font-light'
  
  return (
    <button className={`${buttonStyles} rounded-full border-2 border-primary px-6 py-3 text-xl cursor-pointer hover:border-white hover:text-primary`} onClick={onClick}>
    {name}
     </button>
  )
}

export default ProjectTag