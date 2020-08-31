import React from 'react';
import Section from '../Section/Section';
import first from '../../static/img/first.jpeg';
import Config from '../Config/Config';
import Card from '../Card/Card';
import List from '../List/List';
import { NavLink } from 'react-router-dom';

const sectionContentByDuraction = (title, content, stuffContent, isLeft) => {
    let data = [];

    if (isLeft) {
        data.push(
            <Card
                title={title}
                content={content}
            />
        );

        data.push(stuffContent);
    } else {
        data.push(stuffContent);

        data.push(
            <Card
                title={title}
                content={content}
            />
        );
    }

    return (
        <div className="row">
            {data.map((item, index) => <div className={"col"} key={index.toString()}>{item}</div>)}
        </div>
    );
}

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
                        const isFirst = section.id === 0;
                        const isLeftContent = section.id % 2 === 0;

                        return (
                            <Section
                                body={
                                    isPhone ?
                                        <div className="row">
                                            <div className="col-12">
                                                <Card
                                                    title={section.title === "Мои проекты" ? <NavLink to="/projects" style={{ color: 'gray' }}>{section.title}</NavLink> : section.title}
                                                    content={section.content}
                                                    imgSrc={isFirst ? first : ""}
                                                    altImg={"Picture with me"}
                                                />
                                            </div>
                                        </div>
                                        :sectionContentByDuraction(
                                            section.title,
                                            section.content,
                                            isFirst ? <img src={first} alt="Picture with me"/> : section.stuff,
                                            !isLeftContent
                                        )
                                }
                                key={section.id.toString()}
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
                                            WPF,
                                            Windows Forms,
                                            English - A2 (легкое чтение документации на английском языке)
                                        `}
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
                                        WPF,
                                        Windows Forms,
                                        English - A2 (легкое чтение документации на английском языке)
                                    `}
                                    style={isPhone ? {maxWidth: `18em`, borderRadius: '10px'} : ""}
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
                                />
                            </div>
                        </div>
                }
            </div>
        </main>
    );
}
