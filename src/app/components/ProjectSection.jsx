"use client"

import React , {useState, useRef} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'


const projectData = [
    {
        id: 1,
        title: "Ecommerce",
        description: "This is an ecommerce website",
        image: '/images/projects/ecommerce.png',
        tag: ["All", "Next.js", "Tailwind CSS"],
        gitUrl: 'https://github.com/KINYENJE/next-js-ecommerce',
        previewUrl: 'https://kinyenjemart.netlify.app/',
    },
    {
        id: 2,
        title: "Gym App",
        description: "This is a gym website for women",
        image: '/images/projects/gym.png',
        tag: ["All", "React"],
        gitUrl: 'https://github.com/KINYENJE/gym-react-app',
        previewUrl: 'https://kinyenje-gym-site.netlify.app/',
    },
    {
        id: 3,
        title: 'Neki',
        description: "This is a Nike shoe clone website",
        image: '/images/projects/neki.png',
        tag: ["All", "Vite", "Tailwind CSS"],
        gitUrl: 'https://github.com/KINYENJE/Nike-tailwind-css',
        previewUrl: 'https://kinyenje-neki.netlify.app/',
    },
    {
        id: 4,
        title: 'GPT Summarizer',
        description: "This is a AI powered Summarizer for articles",
        image: '/images/projects/summarizer.png',
        tag: ["All", "Tailwind CSS", "Vite"],
        gitUrl: 'https://github.com/KINYENJE/AI_Summarizer',
        previewUrl: 'https://kinyenje-ai-summarizer.netlify.app/',
    },
    {
        id: 5,
        title: 'GPT T-Shirt',
        description: "This is a AI powered T-Shirt design generator",
        image: '/images/projects/t-shirt.png',
        tag: ["All", "React","Tailwind CSS"],
        gitUrl: 'https://github.com/KINYENJE/AI-tshirt-design',
        previewUrl: 'https://kinyenje-ai-shirt.netlify.app/',
    },
]

const ProjectSection = () => {

    const [selectedTag, setSelectedTag] = useState('All')
    const ref = useRef(null)
    const isInView = useInView(ref, {once: true})

    const handleTagClick = (tag) => {
        setSelectedTag(tag)
    }

    const filteredProjects = projectData.filter((project) => project.tag.includes(selectedTag))

    const cardVariants = {
        initial: {y:50, opacity: 0},
        animate: {
            y: 0,
            opacity: 1,
        },
    }

  return (
    <section id='projects'>
    <h2 className='text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>
        My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-4 py-6 '>
       <ProjectTag name='All' onClick={() => handleTagClick('All')} isSelected={selectedTag === 'All'} />
        <ProjectTag name='React' onClick={() => handleTagClick('React')} isSelected={selectedTag === 'React'} />
        <ProjectTag name='Next.js' onClick={() => handleTagClick('Next.js')} isSelected={selectedTag === 'Next.js'} />
        <ProjectTag name='Vite' onClick={() => handleTagClick('Vite')} isSelected={selectedTag === 'Vite'} />
        <ProjectTag name='Tailwind' onClick={() => handleTagClick('Tailwind CSS')} isSelected={selectedTag === 'Tailwind CSS'} />
    </div>
    <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12 '>
        {filteredProjects.map((project, index) => (
           <motion.li
              key={index}
              variants={cardVariants}
                initial='initial'
                animate={isInView ? 'animate' : 'initial'}
                transition={{duration: 0.5, delay: index * 0.4}}
           >
             <ProjectsCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
           </motion.li>
        ))}
        
    </ul>
    </section>
  )
}

export default ProjectSection