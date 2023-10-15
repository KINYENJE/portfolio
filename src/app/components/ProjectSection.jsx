import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectData = [
    {
        id: 1,
        title: "ecommerce",
        description: "This is an ecommerce website",
        image: '/images/projects/ecommerce.png',
        tag: ["All", "Next.js", "Tailwind CSS"],
        gitUrl: '/',
        previewUrl: 'https://kinyenjemart.netlify.app/',
    },
    {
        id: 2,
        title: "gym",
        description: "This is a gym website",
        image: '/images/projects/gym.png',
        tag: ["All"],
        gitUrl: '/',
        previewUrl: 'https://kinyenje-gym-site.netlify.app/',
    },
    {
        id: 3,
        title: 'Neki',
        description: "This is a Nike shoe clone website",
        image: '/images/projects/neki.png',
        tag: ["All", "Vite", "Tailwind CSS"],
        gitUrl: '/',
        previewUrl: 'https://kinyenje-neki.netlify.app/',
    },
    {
        id: 4,
        title: 'GPT Summarizer',
        description: "This is a Chat GPT Summarizer for articles",
        image: '/images/projects/summarizer.png',
        tag: ["All", "React", "Tailwind CSS"],
        gitUrl: '/',
        previewUrl: 'https://kinyenje-ai-summarizer.netlify.app/',
    },
    {
        id: 5,
        title: 'GPT T-Shirt',
        description: "This is a Chat GPT T-Shirt design generator",
        image: '/images/projects/t-shirt.png',
        tag: ["All", "React"],
        gitUrl: '/',
        previewUrl: 'https://kinyenje-ai-shirt.netlify.app/',
    },
]

const ProjectSection = () => {
  return (
    <>
    <h2 className='text-center text-4xl font-bold mt-4 mb-8 md:mb-12'>
        My Projects</h2>
    <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project) => (
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