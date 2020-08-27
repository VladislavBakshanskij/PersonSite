import React from 'react';


export default function Section(props) {
    return (
        <div className="section" style={props.style}>
            <h2 className="section__title">{props.title}</h2>
            <div className="section__body">{props.children}</div>
        </div>
    );
}