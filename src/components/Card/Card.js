import React from 'react';
import './Card.css';

/**
 * Bootstrap card template component with img
 * @param {title, content, width, props.imgSrc, props.altImg, props.styleImg, style} props
 */
export default function Card(props) {
    return (
        <div className="card border-light section mb-3 shadow-lg shadow__hover" width={props.width}>
            <h2 className="section__title">{props.title}</h2>
            {props.imgSrc ? <img src={`${props.imgSrc}`} alt={`${props.altImg}`} style={props.styleImg} /> : ""}
            <div className="card-body">
                <div className="card-text section__body">
                    {props.content}
                </div>
            </div>
        </div>
    );
}