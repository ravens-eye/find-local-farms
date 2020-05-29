import React from 'react';

export default function Results(props) {
  return (
    <div>
      {props.businessData.map((item, i) => (
        <div key={i}>
          <p>
            {item.name} - {item.offerings}
          </p>
        </div>
      ))}
    </div>
  );
}
