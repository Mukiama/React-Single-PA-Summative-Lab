import React from "react"

export default function Search({search, onSearch}) {
  
    
 return (
        <form className= "searchbar">
            <input
            type= "text"
            id= "search"
            placeholder = "Search project..."
            onChange={(e) => onSearch(e.target.value)}
            />
        
        </form>
 )   
}