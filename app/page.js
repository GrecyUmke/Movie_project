import Header from './Header.js'
import Movie_row from './Movie_row.js'
import './globals.css'



const movie =[ { movie_name:'Dear Zindagi',
                 movie_year_type:'2016 • 2h 31m Drama Romance',
                 Description:'Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in lifes imperfections.'},
                 
                { movie_name1:'Brave',
                  movie_year_type1:'2012 • 1h 33m Adventurous, Comedy' ,
                  Description1:'Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse.'},
                  
                { movie_name2:'Mulan',
                  movie_year_type2:'1998 • 1h 27m Adventurous, Comedy' ,
                  Description2:'To save her father from death in the army, a young maiden secretly goes in his place and becomes one of Chinas greatest heroines in the process.'},
                  
                { movie_name3:'Moana',
                  movie_year_type3:'2016 • 1h 47m Adventurous, Comedy' ,
                  Description3:'In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moanas island, she answers the Oceans call to seek out the Demigod to set things right.'}]
                 
        
                 
const Row = () =>{
    return(
        <>
            <div className="row">
                <Header/>
            </div>
                <Movie_row 
                    box=<h1 className="heading1">{movie[0]["movie_name"]}</h1>
                    box1=<p className="type1">{movie[0]["movie_year_type"]}</p>
                    box2=<p className="head">Description</p>
                    box3=<p className="description1">{movie[0]["Description"]}</p>
                    box4=<h1 className="heading2">{movie[1]["movie_name1"]}</h1>
                    box5=<p className="type2">{movie[1]["movie_year_type1"]}</p>
                    box6=<p className="head1">Description</p>
                    box7=<p className="description2">{movie[1]["Description1"]}</p>
                    box8=<h1 className="heading3">{movie[2]["movie_name2"]}</h1>
                    box9=<p className="type3">{movie[2]["movie_year_type2"]}</p>
                    box10=<p className="head2">Description</p>
                    box11=<p className="description3">{movie[2]["Description2"]}</p>
                    box12=<h1 className="heading4">{movie[3]["movie_name3"]}</h1>
                    box13=<p className="type4">{movie[3]["movie_year_type3"]}</p>
                    box14=<p className="head3">Description</p>
                    box15=<p className="description4">{movie[3]["Description3"]}</p>
                /> 
       </> 
             
   );
};

export default Row;


