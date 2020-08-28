import React from 'react';
import './Section.css';

/**
 * Card section page
 * @param { body } props 
 */
export default function Section(props) {
    return (
        <div className="mb-3">
            {props.body}
        </div>
    );
}
