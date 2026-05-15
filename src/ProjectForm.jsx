import React from "react"
import {useState} from "react"

export default function ProjectForm ({addProject}) {
 const [formData, setFormData] =useState({
    title: "",
    description: "",
    
 })
    
    function handleSubmit(e) {
        e.preventDefault();
        const newProject= {...formData}

        fetch("http://localhost:3001/projects",{
            method: "POST", 
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newProject)
        })
        .then(r=>{
            if(!r.ok) {throw new Error("failed to add project")}
            return r.json()
        })
        .then(newProject =>{
            addProject(newProject)
            setFormData({
                title: "",
                description: ""
            })
        })


    }
    function handleChange(event) {
        setFormData(previousData => ({
            ...previousData, [event.target.name]: event.target.value
        }))
    }
    return (
        <form className="NewProject" onSubmit= {handleSubmit}>
            <h3>Add Project</h3>

            <label>
                Title
                <input
                type= "text"
                name= "title"
                value= {formData.title}
                onChange={handleChange}
                />
            </label>
        
             <label>
                Description
                <input
                type= "text"
                name= "description"
                value= {formData.description}
                onChange= {handleChange}
                />
             </label>
             <button type="submit">Add</button>
        </form>
    )
}