import React from 'react'

const ProjectTag = ({name, onClick, isSelected }) => {

  const buttonStyles = isSelected ? "text-ltext bg-lprimary dark:text-primary dark:bg-transparent font-medium" : 'text-white font-light bg-ltext dark:bg-transparent hover:text-lprimary dark:hover:text-primary'
  
  return (
    <button className={`${buttonStyles} rounded-full border-2 border-lprimary dark:border-primary px-6 py-3 text-xl cursor-pointer hover:border-white  dark:hover:text-primary`} onClick={onClick}>
    {name}
     </button>
  )
}

export default ProjectTag