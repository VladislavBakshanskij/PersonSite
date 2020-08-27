import React from 'react';
import DateBirthday from '../DateBirthday/DateBirthday';
import Section from '../Section/Section';
import first from '../../static/first.jpeg';

/**
 * Main component for site
 * render all content by index.html by path /(https://vladislavbakshanskij.herokuapp.com)
 * @param { imgSrc } props 
 */
export default function Content(props) {
    return (
        <main className="main">
            <div className="container">
                <div className="container">
                    <Section title="О себе" width="100%">
                        <img src={first} alt="Picture with me" width="100%"/>
                        Привет! Меня зовут Бакшанский Владислав Дмитриевич, мне {<DateBirthday dateBirthday="2000-10-03T15:00:00" />} и я программист.
                        Моя первая работа в IT-сфере была контент менеджером в универе.
                        По сути ухода за сайтом я дорабатывал функционал и добавлял фичи как на PHP, так и на JS.
                    </Section>
                </div>
                <div className="container">
                    <Section title="Мои проекты">
                        Projects links
                    </Section>
                </div>
                <div className="container">
                    <Section title="Навыки">
                        Skills
                    </Section>
                </div>
                <div className="container">
                    <Section title="Прошлые места работы">
                        Works list
                    </Section>
                </div>
            </div>
        </main>
    );
}