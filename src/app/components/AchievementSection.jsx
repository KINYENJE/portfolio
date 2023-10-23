'use client'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useSpring, animated } from '@react-spring/web';
import { redirect } from 'next/navigation';

const AnimatedNumber = dynamic(() => {
  return import('react-animated-numbers');
} ,
 {
  ssr: false
}
);

const achievementsList = [
  {
    metric: "Projects",
    value: "27",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Clients",
    value: "58",
  },
  {
    metric: "Awards",
    value: "7",
  },
  {
    metric: "Years",
    value: "3",
  },
];


export const Number = ({ value}) => {
  
  const { number } = useSpring({
    from: { number: 0 },
    number: value,
    delay: 100,
    config: { mass: 1, tension: 20, friction: 10 },
  
  });

   
  
  return (
    <animated.span>
      {number.to((n) => n.toFixed(0))}
    </animated.span>
  ); 
}


const AchievementSection = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      redirect('/#projects')
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  
  
  
  return (
    <div className='py-8 xl:gap-16 sm:py-16  '>
      <div className='sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between'>
      {achievementsList.map((achievement, index) => {
        return (
          <div key={index} className='flex flex-col items-center justify-center md:mx-4 my-4 sm:my-0'>
          <h2 className='text-4xl font-bold text-white flex flex-row  '>
            {achievement.prefix}
            <Number value={parseInt(achievement.value)} />
            {/* <AnimatedNumber
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                /> */}
            {achievement.postfix}
            </h2>
          <p className='text-tertiary'>{achievement.metric}</p>
        </div>
        )
        
      })}
    </div>
    </div>
  )
}

export default AchievementSection