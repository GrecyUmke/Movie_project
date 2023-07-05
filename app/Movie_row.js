const Movie = (props) =>{
    return(
        <>
            <div className="row4"></div>
            <div className="row5">
                <div className="col6">Watch</div>
            </div>
            <div className="row6"></div>
            <div className="row7">
                <img src="image 1.svg"/>
                <div className="Detail_container1">
                    <div className="detail">
                        {props.box}
                        {props.box1}
                        {props.box2}
                        {props.box3}
                    </div>
                    <div className="button">
                        <div className="Likeicon1">
                            <img src="Like icon.svg"/>
                        </div>
                        <div className="rating1"></div>
                        <div className="Dislikeicon1">
                            <img src="Dislike icon.svg"/>
                        </div>
                        <div className="Delete1">
                            <img src="Delete icon.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row8">
                <img src="image 1.png" width="200px" height="226px"/>
                <div className="Detail_container2">
                    <div className="detail1">
                        {props.box4}
                        {props.box5}
                        {props.box6}
                        {props.box7}
                    </div>
                       <div className="button1">
                        <div className="Likeicon2">
                            <img src="Like icon.svg"/>
                        </div>
                        <div className="rating2"></div>
                        <div className="Dislikeicon1">
                            <img src="Dislike icon.svg"/>
                        </div>
                        <div className="Delete2">
                            <img src="Delete icon.svg"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row9">
                <img src="image 1.jpg" width="200px" height="226px"/> 
                <div className="Detail_container3"></div>
            </div>
        </>
    );
};


export default Movie;        

