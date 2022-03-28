import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);

  return (
    <div className="container">
        <h2>GifExpert App</h2>
        <AddCategory  setCategories = {setCategories}/>
        <hr />

        <ol>
          {categories.length === 0 && <p>No search history</p>}
          {categories.map((category) => (
            <GifGrid 
              key = {category}
              category = {category}/>
          ))}
        </ol>
    </div>
  )
}

export default GifExpertApp