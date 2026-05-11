import {useState} from "react"
export default function ProjectForm () {
    const [title, setTitle] = useState("")
    const[description, setDescription] = useState("")
    function handleSubmit(e) {
        e.preventDefault()git
    }

    return (
        <form className="NewProject" onSubmit= {handleSubmit}>
            <h3>Add Project</h3>

            <label>
                Title
                <input
                type= "text"
                name= "title"
                value= {title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                Description
                <input
                type= "text"
                name= "description"
                value= {description}
                onChange= {(e)=> setDescription(e.target.value)}
                />
             </label>
             <button type="submit">Add</button>
        </form>
    )
}