import React from "react";
import Card from "./Card";
import './index.css';
import Netflix from './Netflix';
import Amazon from './Amazon';
import objA from './ArrayA';

const platform="amazon";

function App(){
    return platform==="netflix"?<Netflix/>:<Amazon/>;
}

export default App;
