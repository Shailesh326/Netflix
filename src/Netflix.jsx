import React from "react";
import objN from './Array';
import Card from "./Card";


function ncard(val){
    return(
        <Card imgsrc={val.imgsrc}
    cat={val.cat} sname={val.sname}
    link={val.link}
    details={val.details}/>
    )
}

const Netflix = () =>{


return (<>
    <h1 className="heading">Netflix Series</h1>
     <div class="row row-cols-1 row-cols-md-2 outer">
    {objN.map(ncard)}
    </div>
    </>);
}

export default Netflix;