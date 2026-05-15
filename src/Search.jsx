import React from "react"

export default function Search({search, onSearch}) {
    function handleSubmit (e) {
        e.preventDefault()
        console.log("searched")
    }
 return (
        <form className= "searchbar" onSubmit={handleSubmit}>
            <input
            type= "text"
            id= "search"
            placeholder = "search project"
            onChange={(e) => onSearch(e.target.value)}
            />
        
        </form>
 )   
}