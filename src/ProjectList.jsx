import React, {useState} from "react";
import ProjectForm from './ProjectForm'
import Project from './Project'

export default function ProjectList() {
    const [projects, setProjects]= useState("")
    const [listedProjects, setlistedProjects]= useState("")

    
    }
    return (
        <div className="ProjectList">
            <ProjectForm />
            <Project />
            <ul className= "Projects">
            </ul>
            
        </div>
    )
    
}