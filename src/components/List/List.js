import React from 'react';
import ListItem from './ListItem/ListItem';
import {NavLink} from 'react-router-dom';
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
                                        <NavLink to={`/project/${item.name}`} >
                                            <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                        </NavLink> : ""
                                }
                            </div> : item
                        }
                    />
                })
            }
        </ul>
    );
}
