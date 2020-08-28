import React from 'react';
import ListItem from './ListItem/ListItem';

/**
 * list component
 * @param {data, style} props 
 */
export default function List(props) {
    return (
        <ul className="list-group" style={props.style}>
            {
                props.data.map((item, index) => {
                    return <ListItem
                        key={index.toString()}
                        value={
                            item.href !== undefined ? <div>
                                <a href={`${item.href}`} title={`${item.tech}`} style={{marginRight: 5}}>
                                    {item.title}
                                </a>
                                {
                                    item.name ? 
                                        <a href={`/project/${item.name}`} >
                                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                        </a> : ""
                                }
                            </div> : item
                        }
                    />
                })
            }
        </ul>
    );
}