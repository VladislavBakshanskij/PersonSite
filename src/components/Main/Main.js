import React from 'react';
import Section from '../Section/Section';
import first from '../../static/img/first.jpeg';
import Config from '../Config/Config';
import Card from '../Card/Card';
import List from '../List/List';


/**
 * Main component for site
 * render all content by index.html by path /(https://vladislavbakshanskij.herokuapp.com)
 * @param { isPhone } props 
 */
export default function Main(props) {
    const isPhone = props.isPhone;

    return (
        <main className="main">
            <div className="container">
                {
                    Config.SECTIONS.map((section) => {
                        const width = section.width;
                        const isFirst = section.id === 0;
                        const isLeftContent = section.id % 2 === 0;
                        const style = {
                            borderRadius: 10,
                            width: isPhone ? '90%' : "80%"
                        };

                        if (isPhone) {
                            style.marginLeft = 'auto';
                            style.marginRight = 'auto';
                            style.display = 'block';
                        }

                        const sectionContentLeft = (title, content, width, stuffContent) => {
                            return (
                                <div className="row">
                                    <div className="col">
                                        <Card
                                            title={title}
                                            content={content}
                                            width={width}
                                        />
                                    </div>
                                    <div className="col">
                                        {stuffContent}
                                    </div>
                                </div>
                            );
                        }

                        const sectionContentRigth = (title, content, width, stuffContent) => {
                            return (
                                <div className="row">
                                    <div className="col">
                                        {stuffContent}
                                    </div>
                                    <div className="col">
                                        <Card
                                            title={title}
                                            content={content}
                                            width={width}
                                        />
                                    </div>
                                </div>
                            );
                        };

                        return (
                            <Section
                                key={section.id.toString()}
                                body={
                                    isPhone ?
                                        <div className="row">
                                            <div className="col-12">
                                                <section className="card border-light section mb-3 shadow__hover shadow-lg" style={{ borderRadius: "10px" }}>
                                                    <h2 className="section__title">{section.title === "Мои проекты" ? <a href="/projects" style={{color: 'gray'}}>{section.title}</a> : section.title}</h2>
                                                    {isFirst ? <img src={first} alt="Picture with me" style={style} /> : ""}
                                                    <div className="card-body">
                                                        <div className="card-text section__body">
                                                            {section.content}
                                                        </div>
                                                    </div>
                                                </section>
                                            </div>
                                        </div>
                                        :
                                        <div className="row">
                                            {
                                                isLeftContent ?
                                                    sectionContentRigth(
                                                        section.title,
                                                        section.content,
                                                        width,
                                                        isFirst ? <img src={first} alt="Picture with me" style={style} /> : section.stuff
                                                    )
                                                :
                                                    sectionContentLeft(
                                                        section.title,
                                                        section.content,
                                                        width,
                                                        isFirst ? <img src={first} alt="Picture with me" style={style} /> : section.stuff
                                                    )
                                            }
                                        </div>
                                }
                            />
                        )
                    })
                }
                {
                    isPhone ?
                    <div>
                        <div className="row">
                            <div className="col-12">
                                <section className="card border-light section mb-3 shadow__hover shadow-lg" style={{ borderRadius: "10px" }}>
                                    <h2 className="section__title">Навыки</h2>
                                    <div className="card-body">
                                        <div className="card-text section__body">
                                            Python,
                                            C#,
                                            PHP,
                                            HTML,
                                            CSS,
                                            JS,
                                            React,
                                            SQL,<br/>
                                            English - A2 (легкое чтение документации на английском языке)
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <section className="card border-light section mb-3 shadow__hover shadow-lg" style={{ borderRadius: "10px" }}>
                                    <h2 className="section__title">Прошлые места работы</h2>
                                    <div className="card-body">
                                        <div className="card-text section__body">
                                        <List
                                            data={[
                                                "Кубанский Государственный Университет - Системный администратор",
                                                "Кубанский Государственный Университет - Контент-менеджер"
                                            ] }
                                        />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div> 
                    </div> 
                    :
                    <div className="row">
                        <div className="col">
                            <Card
                                title={"Навыки"}
                                content={`
                                    Python,
                                    C#,
                                    PHP,
                                    HTML,
                                    CSS,
                                    JS,
                                    React,
                                    SQL,
                                    English - A2 (легкое чтение документации на английском языке)
                                `}
                                width={'fit-content'}
                            />
                        </div>
                        <div className="col">
                            <Card
                                title={"Прошлые места работы"}
                                content={<List
                                    data={[
                                        "Кубанский Государственный Университет - Системный администратор",
                                        "Кубанский Государственный Университет - Контент-менеджер"
                                    ] }
                                />}
                                width={'fit-content'}
                            />
                        </div>
                    </div>
                }
            </div>
        </main>
    );
}
