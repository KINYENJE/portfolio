import React from 'react'
import { motion } from 'framer-motion'


const tabVariants = {
  default: {width: 0 },
  active: {width: "calc(100% - 50%)"},
};


const TabButton = ({active, selectTab, children}) => {

    const buttonClass = active ? 'dark:text-primary text-lsecondary hover:text-white' : 'text-ltext dark:text-secondary dark:hover:text-white hover:text-lsecondary'
    
    
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-bold  ${buttonClass}`} >
            {children}
        </p>
        <motion.div
        variants={tabVariants}
        animate={active ? "active" : "default"}
        className='h-1 bg-lprimary dark:bg-secondary rounded-full mt-2 mr-3'
        >

        </motion.div>
    </button>
  )
}

export default TabButton