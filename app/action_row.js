"use client"
import React, { useState } from 'react';

const Action_row =()=>{
         const [movies, setMovies] = useState(0);
         const like = () => {
             setMovies(movies + 1);
         };

         const dislike = () => {
             setMovies(movies - 1);
         };
         
         return(
             <>
                  <div className="actions">
                      <div className="like">
                          <button onClick={like}><img src="Like icon.svg" /></button>
                      </div>
                      <div className="rating">
                          <p className="value">{movies}</p>
                      </div>
                      <div className="dislike">
                          <button onClick={dislike} class="imge"><img src="Dislike icon.svg" /></button> 
                      </div>
     
                  </div>
             </>
    )

}
export default Action_row;
