import React from "react";
import objA from './ArrayA';
import Card from "./Card";

style={
    
}
function ncard(val){
    return(
        <Card imgsrc={val.imgsrc}
    cat={val.cat} sname={val.sname}
    link={val.link}
    details={val.details}/>
    )
}

const Amazon = () =>{


return (<>
    <h1 className="heading">Amazon Series</h1>
     <div class="row row-cols-1 row-cols-md-2 outer">
    {objA.map(ncard)}
    </div>
    </>);
}

export default Amazon;