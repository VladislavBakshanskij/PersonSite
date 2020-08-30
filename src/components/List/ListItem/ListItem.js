import React from 'react';

/**
 * Item list
 * @param {value, classNameItem, style, tag} props
 */
export default function ListItem(props) {
    if (props.tag === <ol/>)
        return <ol className={props.classNameItem} style={{borderRadius: 5}}>{props.value}</ol>;
    else
        return <li className={props.classNameItem} style={{borderRadius: 5}}>{props.value}</li>;
}