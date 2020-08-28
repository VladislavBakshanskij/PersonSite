import React from 'react';

/**
 * Item list
 * @param {value} props 
 */
export default function ListItem(props) {
    return <li className="list-group-item mb-2 shadow-lg" style={{borderRadius: 5}}>{props.value}</li>
}