import React from 'react';
import Section from '../Section/Section';
import first from '../../static/img/first.jpeg';
import Config from '../Config/Config';
import Card from '../Card/Card';
import List from '../List/List';
import { NavLink } from 'react-router-dom';


/**
 * Main component for site
 * render all content in index.html by path /(https://vladislavbakshanskij.herokuapp.com)
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

                        const sectionContentRight = (title, content, width, stuffContent) => {
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
                                                <Card
                                                    title={section.title === "Мои проекты" ? <NavLink to="/projects" style={{ color: 'gray' }}>{section.title}</NavLink> : section.title}
                                                    content={section.content}
                                                    width={'fit-content'}
                                                    imgSrc={isFirst ? first : ""}
                                                    altImg={"Picture with me"}
                                                    styleImg={style}
                                                />
                                            </div>
                                        </div>
                                        :
                                        <div className="row">
                                            {
                                                isLeftContent ?
                                                    sectionContentRight(
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
                            <div className="row mb-3">
                                <div className="col-12">
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
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <Card
                                        title={"Прошлые места работы"}
                                        content={
                                            <List
                                                classNameList="list-group"
                                                classNameItem="list-group-item mb-2 shadow"
                                                styleItem={{ width: 'fit-content' }}

                                                data={[
                                                    "Кубанский Государственный Университет - Системный администратор",
                                                    "Кубанский Государственный Университет - Контент-менеджер"
                                                ]}
                                            />
                                        }
                                        width={'fit-content'}
                                    />
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
                                    content={
                                        <List
                                            classNameList="list-group"
                                            classNameItem="list-group-item mb-2 shadow"
                                            styleItem={{ width: 'fit-content' }}

                                            data={[
                                                "Кубанский Государственный Университет - Системный администратор",
                                                "Кубанский Государственный Университет - Контент-менеджер"
                                            ]}
                                        />
                                    }
                                    width={'fit-content'}
                                />
                            </div>
                        </div>
                }
            </div>
        </main>
    );
}
