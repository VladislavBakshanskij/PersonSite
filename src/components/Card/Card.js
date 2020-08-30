import React from 'react';
import './Card.css';

/**
 * Bootstrap card template component
 * @param {title, content, width} props 
 */
export default function Card(props) {
    return (
        <div className="card border-light section mb-3 shadow-lg shadow__hover" style={{ maxWidth: '18rem', borderRadius: '10px' }} width={props.width}>
            <h2 className="section__title">{props.title}</h2>
            <div className="card-body">
                <div className="card-text section__body">
                    {props.content}
                </div>
            </div>
        </div>
    );
}