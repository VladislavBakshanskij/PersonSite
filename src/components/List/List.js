import React from 'react';
import ListItem from './ListItem/ListItem';

/**
 * list component
 * @param {data, style, styleItem, classNameItem, classNameList} props
 */
export default function List(props) {
    return (
        <ul className={props.classNameList} style={props.style}>
            {
                props.data.map((item, index) => {
                    return <ListItem
                        classNameItem={props.classNameItem}
                        key={index.toString()}
                        value={item}
                        style={props.styleItem}
                    />
                })
            }
        </ul>
    );
}
