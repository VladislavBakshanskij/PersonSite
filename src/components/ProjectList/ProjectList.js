import React from 'react';
import List from '../List/List';
import {NavLink} from 'react-router-dom';

export default function ProjectList() {
    const data = [
        {
            id: 0,
            title: 'Счетчик мировой статиски по COVID-19',
            href: 'https://github.com/VladislavBakshanskij/COVID-19',
            tech: 'Технологии: .Net core 3.1, C#, AngleSharp',
            name: 'COVID-19-STATE'
        }, {
            id: 1,
            title: 'Система помощи и прогнозирования сельскохозяйственных решений',
            href: 'https://github.com/VladislavBakshanskij/CFAS',
            tech: 'Технологии: .Net 4, C#, Windows forms, WPF, Git',
            name: 'CFAS'
        }, {
            id: 2,
            title: 'Сайт-открытка на день рождение',
            href: 'https://cuteinpocket.herokuapp.com/',
            tech: 'Технологии: Python, Django, HTML, CSS, JS, Bootstrap, jQuery, Git',
            name: 'CIP'
        }, {
            id: 3,
            title: 'Simple minecraft',
            href: 'https://github.com/VladislavBakshanskij/Minecraft',
            tech: 'Технологии: C++, OpenGL, SFML, glut',
            name: 'Minecraft'
        }, {
            id: 4,
            title: 'Сайт по заказу на wordpress',
            href: 'http://eltest.tw1.ru/',
            tech: 'Технологии: PHP, WordPress',
            name: 'eltest'
        }, {
            id: 5,
            title: 'Страница для выбора направления абитуриентов',
            href: 'https://kubsau.ru/ab-list/',
            tech: 'Технологии: PHP, HTML, CSS, JS, Ajax, Bootstrap, jQuery, 1C-bitrix',
            name: 'ab-list'
        }, {
            id: 6,
            title: 'Solid Runner (StartUp)',
            href: '#!',
            tech: 'Технологии: C#, Unity, Blender, Git',
            name: 'Solid-Runner'
        }, {
            id: 7,
            title: 'Анализ и визуализация данных по COVID-19',
            href: 'https://colab.research.google.com/drive/1nRSz4VVhms6cWkQiUv60TPHyVQCKVSMI?usp=sharing',
            tech: 'Технологии: Python, Tensorflow, Pandas, Numpy, Keras',
            name: 'COVID-19'
        }, {
            id: 8,
            title: 'Персональный сайт',
            href: '/',
            tech: 'Технологии: JS, CSS, Bootstrap, React, Git',
            name: 'personSite'
        }
    ];

    return <div className="container" style={{marginTop: 6}}>
        <List
            classNameList="list-group"
            classNameItem="list-group-item mb-2 shadow-lg"
            styleItem={{borderRadius: 5}}

            style={{
                fontSize: '1.05em',
                width: 'fit-content',
                textAlign: 'left',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontFamily: 'Montserrat, sans-serif'
            }}

            data={data.map((item) => {
                return (
                    <div key={item.id.toString()}>
                        <a href={`${item.href}`} title={`${item.tech}`} style={{marginRight: 5}}>
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
}