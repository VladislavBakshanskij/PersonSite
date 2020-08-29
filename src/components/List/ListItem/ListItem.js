import React from 'react';

/**
 * Item list
 * @param {value, classNameItem, style} props 
 */
export default function ListItem(props) {
    return <li className={props.classNameItem} style={{borderRadius: 5}}>{props.value}</li>
}