"use client"

import React , {useState} from 'react'
import ProjectsCard from './ProjectsCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "ecommerce",
        description: "This is an ecommerce website",
        image: '/images/projects/ecommerce.png',
        tag: ["All", "Next.js", "Tailwind CSS"],
        gitUrl: 'https://github.com/KINYENJE/next-js-ecommerce',
        previewUrl: 'https://kinyenjemart.netlify.app/',
    },
    {
        id: 2,
        title: "gym",
        description: "This is a gym website",
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
        description: "This is a Chat GPT Summarizer for articles",
        image: '/images/projects/summarizer.png',
        tag: ["All", "Tailwind CSS", "Vite"],
        gitUrl: 'https://github.com/KINYENJE/AI_Summarizer',
        previewUrl: 'https://kinyenje-ai-summarizer.netlify.app/',
    },
    {
        id: 5,
        title: 'GPT T-Shirt',
        description: "This is a Chat GPT T-Shirt design generator",
        image: '/images/projects/t-shirt.png',
        tag: ["All", "React","Tailwind CSS"],
        gitUrl: 'https://github.com/KINYENJE/AI-tshirt-design',
        previewUrl: 'https://kinyenje-ai-shirt.netlify.app/',
    },
]

const ProjectSection = () => {

    const [selectedTag, setSelectedTag] = useState('All')

    const handleTagClick = (tag) => {
        setSelectedTag(tag)
    }

    const filteredProjects = projectData.filter((project) => project.tag.includes(selectedTag))

  return (
    <>
    <h2 className='text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>
        My Projects
    </h2>
    <div className='text-white flex flex-row justify-center items-center gap-4 py-6'>
       <ProjectTag name='All' onClick={() => handleTagClick('All')} isSelected={selectedTag === 'All'} />
        <ProjectTag name='React' onClick={() => handleTagClick('React')} isSelected={selectedTag === 'React'} />
        <ProjectTag name='Next.js' onClick={() => handleTagClick('Next.js')} isSelected={selectedTag === 'Next.js'} />
        <ProjectTag name='Vite' onClick={() => handleTagClick('Vite')} isSelected={selectedTag === 'Vite'} />
        <ProjectTag name='Tailwind CSS' onClick={() => handleTagClick('Tailwind CSS')} isSelected={selectedTag === 'Tailwind CSS'} />
    </div>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
            <ProjectsCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
            />
        ))}
        
    </div>
    </>
  )
}

export default ProjectSection