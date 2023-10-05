import React from 'react'

const TabButton = ({active, selectTab, children}) => {

    const buttonClass = active ? ' border-b border-[#93A5CF] text-[#93A5CF] hover:text-white' : ' hover:text-[#ADB7BE]  '
    
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold  ${buttonClass}`} >
            {children}
        </p>
    </button>
  )
}

export default TabButton