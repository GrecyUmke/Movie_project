import React from 'react';
const Delete =(props)=>{
    return(
        <>
            <div className="delete_button">
                <button onClick={()=>{props.onDelete()}}><img src="Delete icon.svg"/></button>
            </div>
        </>
   )
}
export default Delete;
