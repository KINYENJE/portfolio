import React from 'react'
import { motion } from 'framer-motion'


const tabVariants = {
  default: {width: 0 },
  active: {width: "calc(100% - 50%)"},
};


const TabButton = ({active, selectTab, children}) => {

    const buttonClass = active ? 'text-primary hover:text-white' : ' hover:text-tertiary'
    
    
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold  ${buttonClass}`} >
            {children}
        </p>
        <motion.div
        variants={tabVariants}
        animate={active ? "active" : "default"}
        className='h-1 bg-primary rounded-full mt-2 mr-3'
        >

        </motion.div>
    </button>
  )
}

export default TabButton