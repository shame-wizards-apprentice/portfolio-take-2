import React from "react";
import "./style.css";


function Project(props) {
    return (
        <div class="col-6">
            <img src={props.source} class="img-fluid" alt={props.alt} />
            <p>{props.content}</p>
        </div>
    )
}

export default Project;