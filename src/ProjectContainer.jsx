import React from "react"
import ProjectCard from './ProjectCard'
import Search from './Search'


export default function ProjectContainer({projects, search, onSearch}) {
  

    return (

        <div className="container">
            <Search search={search} onSearch= {onSearch}/>
            {projects.map(project => <ProjectCard key={project.id}{...project}/>)}
          
            
        </div>
    )
    
}