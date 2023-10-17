import React from 'react'

const ProjectTag = ({name, onClick, isSelected }) => {

  const buttonStyles = isSelected ? "text-[#93A5CF] font-medium" : 'text-white font-light'
  
  return (
    <button className={`${buttonStyles} rounded-full border-2 border-[#93A5CF] px-6 py-3 text-xl cursor-pointer hover:border-white hover:text-[#93A5CF]`} onClick={onClick}>
    {name}
     </button>
  )
}

export default ProjectTag