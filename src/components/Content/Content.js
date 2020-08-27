import React from 'react';
import Section from '../Section/Section';
import first from '../../static/first.jpeg';
import Config from '../Config/Config';

/**
 * Main component for site
 * render all content by index.html by path /(https://vladislavbakshanskij.herokuapp.com)
 * @param { isPhone } props 
 */
export default function Content(props) {
    return (
        <main className="main">
            <div className="container">
                {
                    Config.SECTIONS.map((section) => {
                        return section.id === 0 ?
                            <Section key={section.id.toString()} title={section.title} width={section.width} first={first} isPhone={props.isPhone}>
                                {section.content}
                            </Section> :
                            <Section key={section.id.toString()} title={section.title} isPhone={props.isPhone}>
                                {section.content}
                            </Section> 
                    })
                }
            </div>
        </main>
    );
}