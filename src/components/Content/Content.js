import React from 'react';
import DateBirthday from '../DateBirthday/DateBirthday';
import Section from '../Section/Section';

/**
 * Main component for site
 * render all content by index.html by path /(https://vladislavbakshanskij.herokuapp.com)
 */
export default function Content() {
    return (
        <main>
            <div className="container">
                <Section title="О себе">
                    Привет! Меня зовут Бакшанский Владислав Дмитриевич, мне {<DateBirthday dateBirthday="2000-10-03T15:00:00" />}.
                    С 2019 я начал свой путь в айти сфере, 
                </Section>
                <Section title="Мои проекты">
                    Projects links
                </Section>
                <Section title="Навыки">
                    Skills
                </Section>
                <Section title="Прошлые места работы">
                    Works list
                </Section>
            </div>
        </main>
    );
}