import React from 'react';
import './Card.css';

/**
 * Bootstrap card template component with img
 * @param {title, content, width, props.imgSrc, props.altImg, props.styleImg, style} props
 */
export default function Card(props) {
    return (
        <div className="card border-light mb-3 shadow-lg shadow__hover" width={props.width}>
            <h2 className="card__title">{props.title}</h2>
            <div className="text-center">
                {props.imgSrc ? <img src={`${props.imgSrc}`} alt={`${props.altImg}`} style={props.styleImg} /> : ""}
            </div>
            <div className="card-body">
                <div className="card-text card__body">
                    {props.content}
                </div>
            </div>
        </div>
    );
}