import React from 'react'

const achievementsList = [
  {
    metric: "Projects",
    value: "100+",
  },
  {
    metric: "Clients",
    value: "50+",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "5+",
  },
]

const AchievementSection = () => {
  return (
    <div className='py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
      <div className='border-[#33353F] border rounded-md py-8 px-7 flex flex-row items-center justify-between'>
      {achievementsList.map((achievement, index) => {
        return (
          <div key={index} className='flex flex-col items-center justify-center'>
          <h3 className='text-5xl font-bold text-white'>{achievement.value}</h3>
          <p className='text-tertiary'>{achievement.metric}</p>
        </div>
        )
        
      })}
    </div>
    </div>
  )
}

export default AchievementSection