import React from 'react'

const TabButton = ({active, selectTab, children}) => {

    const buttonClass = active ? ' border-b border-primary text-primary hover:text-white' : ' hover:text-tertiary  '
    
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold  ${buttonClass}`} >
            {children}
        </p>
    </button>
  )
}

export default TabButton