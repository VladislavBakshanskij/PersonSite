import React from 'react';
import List from '../List/List';
import {NavLink} from 'react-router-dom';
import Config from '../Config/Config'


export default function ProjectList() {
    const data = Config.PROJECTS;

    return (
        <main>
            <div className="container" style={{marginTop: 6}}>
                <List
                    classNameList="list-group"
                    classNameItem="list-group-item mb-2 shadow-lg"
                    styleItem={{borderRadius: 5}}

                    style={{
                        fontSize: '1.05em',
                        width: 'fit-content',
                        textAlign: 'left',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}

                    data={data.map((item) => {
                        return (
                            <div key={item.id.toString()}>
                                <a href={`${item.href}`} title={`${item.tech}`} style={{marginRight: 5, fontFamily: "'Montserrat', sans-serif"}}>
                                    {item.title}
                                </a>
                                {
                                    <NavLink to={`/project/${item.name}`}>
                                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                                    </NavLink>
                                }
                            </div>
                        );
                    })}
                />
            </div>
        </main>
    );
}