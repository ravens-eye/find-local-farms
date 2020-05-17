import React from "react";

export default function Results(props) {
    return (
        <div class>
            {props.results.map((item,i)=>(
                <p>Result {i}</p>
            ))}
        </div>
    )
} 