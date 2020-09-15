import React from 'react';


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
