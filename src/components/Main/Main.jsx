import React from 'react';
import Section from '../Section/Section';
import first from '../../static/img/first.jpeg';
import Config from '../Config/Config';
import Card from '../Card/Card';
import List from '../List/List';
import { NavLink } from 'react-router-dom';
import './Main.css';


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
export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isPhone: props.isPhone,
            isLoad: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoad: true,
            sections: Config.SECTIONS
        })
    }

    render() {
        const isPhone = this.state.isPhone;
        
        const cards = {
            works: () => {
                return (
                    <Card
                        title={"Прошлые места работы"}
                        content={
                            <List
                                classNameList="list-group"
                                classNameItem="list-group-item mb-2 shadow card__body"
                                styleItem={{ width: 'fit-content' }}

                                data={["Отсутствуют"]}
                            />
                        }
                    />
                );
            },
            skills: () => {
                return (
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
                            Docker,
                            English - A2 (легкое чтение документации на английском языке)
                        `}
                    />
                );
            }
        };

        return (
            <main className="main">
                {
                    this.state.isLoad ? <div className="container">
                        {
                            this.state.sections.map((section) => {
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
                                                    isFirst ? <img src={first} alt="Picture with me" className="shadow__hover"/> : section.stuff,
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
                                            {<cards.skills/>}
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">                                   
                                            {<cards.works/>}
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className="row">
                                    <div className="col">
                                        {<cards.skills/>}
                                    </div>
                                    <div className="col">                                    
                                        {<cards.works/>}
                                    </div>
                                </div>
                        }
                    </div> : "Loading..."
                }
            </main>
        );
    }
}
