// import { useState, useEffect } from "react";
import GifGridItem from "./GifGridItem";

import { useFetchGifs } from "../hooks/useFetchGifs"

const GifGrid = ({ category }) => {

    const { data: gifs, loading } = useFetchGifs(category);

  return (
      <div className="category-container">
        <h3 className="animate__animated animate__fadeIn">{category}</h3>

        {loading && <p className="animate__animated animate__flash">Loading...</p> }

        <div className="card-grid">
            {
                gifs.map((gif) => (
                    <GifGridItem 
                        key= {gif.id} 
                        {...gif}
                    />
                ))
            }
        </div>
      </div>
  )
}

export default GifGrid