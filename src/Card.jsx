import React from "react";

function Card(props){
    const style={
        width:'18rem'
    }
    return(
        <>
        {/* <div className="outer" >
            <div className="card" style={style}>
                <img src={props.imgsrc} alt="poster" className="card-img-top" />
                <div className="card_info">
                    <span className="category">{props.cat}</span>
                    <h3 className="card-title">{props.sname}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div> */}
       
        <div class="card  inner text-center  " style={style}>
        <div class="geeks">
        <img class="card-img-top pic " src={props.imgsrc} alt="Card image cap"/>
        </div>
        <div class="card-body">
            <h5 class="card-title">{props.sname}</h5>
            <p class="card-text">{props.cat}</p>
            <p className="details">{props.details}</p>
            <a href={props.link} class="btn btn-outline-dark">Watch</a>
        </div>
        </div>

        </>
    );
}
export default Card;