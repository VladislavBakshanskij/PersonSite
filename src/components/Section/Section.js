import React from 'react';
import './Section.css';

/**
 * Card section page
 * @param { style, title, children, width } props 
 */
export default function Section(props) {
    const width = props.width;
    console.log(props.isPhone);
    
    return (
        <div className="container row">
            <div className="col-6">
                {props.first ? <img src={props.first} alt="Picture with me" style={{borderRadius: 10, width: "90%", height: "90%"}}/> : ""}
            </div>
            <div className="col-6">
                <section className="card border-light section mb-3 shadow shadow__hover" style={{maxWidth: '18rem', borderRadius: '10px'}} width={width}>
                    <h2 className="section__title">{props.title}</h2>
                    <div className="card-body">
                        <p className="card-text section__body">{props.children}</p>
                    </div>
                </section>
            </div>
        </div>
    );
}