import React from 'react';
import List from '../List/List';

export default function ProjectList() {
    return <div className="container" style={{marginTop: 6}}>
        <List
            style={{
                fontSize: '1.05em',
            }}

            data={[
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
                    tech: 'Технологии: Python, Django, HTML, CSS, JS, Bootsrap, jQuery, Git',
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
                    tech: 'Технологии: PHP, HTML, CSS, JS, Ajax, Bootsrap, jQuery, 1C-bitrix',
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
                }
            ]}
        />
    </div>
}