import React from 'react';

export default function Results(props) {
    return (
        <div>
            {props.results.map((item,i)=>(
                <p key={i}>Result {i}</p>
            ))}
        </div>
    )
} 