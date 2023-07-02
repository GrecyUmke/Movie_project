import Header from './Header.js'
import Movie_row from './Movie_row.js'
import './globals.css'

const Row = () =>{
    return(
        <>
            <div className="row">
                <Header/>
            </div>
                <Movie_row/> 
       </> 
             
   );
};

export default Row;
