import React from 'react'
import ProjectsCard from './ProjectsCard'

const projectData = [
    {
        id: 1,
        title: "ecommerce",
        description: "This is an ecommerce website",
        image: '/images/projects/ecommerce.png',
        tag: ["All", "Next.js", "Tailwind CSS"],
    },
    {
        id: 2,
        title: "gym",
        description: "This is a gym website",
        image: '/images/projects/gym.png',
        tag: ["All"],
    },
    {
        id: 3,
        title: 'Neki',
        description: "This is a Nike shoe clone website",
        image: '/images/projects/neki.png',
        tag: ["All", "Vite", "Tailwind CSS"],
    },
    {
        id: 4,
        title: 'GPT Summarizer',
        description: "This is a Chat GPT Summarizer for articles",
        image: '/images/projects/summarizer.png',
        tag: ["All", "React", "Tailwind CSS"],
    },
    {
        id: 5,
        title: 'GPT T-Shirt',
        description: "This is a Chat GPT T-Shirt design generator",
        image: '/images/projects/t-shirt.png',
        tag: ["All", "React"],
    },
]

const ProjectSection = () => {
  return (
    <>
    <h2>My Projects</h2>
    <div>
        {projectData.map((project) => (
            <ProjectsCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
            />
        ))}
        
    </div>
    </>
  )
}

export default ProjectSection