import {useState, useEffect} from "react"
import React from "react";
import './App.css'
import Header from './Header'
import ProjectContainer from './ProjectContainer'
import ProjectForm from './ProjectForm'

function App() {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState("")

  useEffect(()=> {
    fetch("http://localhost:3001/projects")
    .then(r=> {
      if(!r.ok) {throw new Error("failed to get projects")}
      return r.json()
    })
    .then(data => {
      console.log(data)
      setProjects(data)})
    .catch(error => console.log(error.message))

  }, [])
  
    const addProject=newProject =>setProjects(previousProjects =>[...previousProjects, newProject])
    const displayedProject = projects.filter((project) => (project.title || "").toLowerCase().includes(search.toLowerCase()))
    return (
    <div>
      <Header />
      <ProjectForm />
      <ProjectContainer projects={displayedProject} addProject={addProject} search={search} onSearch={setSearch}/>
    </div>
   
  )
}

export default App
