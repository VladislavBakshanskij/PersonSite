import React from 'react';
import './Section.css';

/**
 * Card section page
 * @param { style, title, children } props 
 */
export default function Section(props) {
    const hover = (e) => {
        console.log(e.target);
    };
    
    return (
        <section className="card border-light section mb-3 shadow shadow__hover" onMouseOver={hover} style={{maxWidth: '18rem', borderRadius: '10px'}}>
            <h2 className="section__title">{props.title}</h2>
            <div className="card-body">
                <p className="card-text section__body">{props.children}</p>
            </div>
        </section>
    );
}