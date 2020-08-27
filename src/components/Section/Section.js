import React from 'react';
import './Section.css';

/**
 * Card section page
 * @param { style, title, children, width } props 
 */
export default function Section(props) {
    const hover = (e) => {
        console.log(e.target);
    };

    const width = props.width;
    
    return (
        <section className="card border-light section mb-3 shadow shadow__hover" onMouseOver={hover} style={{maxWidth: '18rem', borderRadius: '10px', width: {width}}}>
            <h2 className="section__title">{props.title}</h2>
            <div className="card-body">
                <p className="card-text section__body">{props.children}</p>
            </div>
        </section>
    );
}