import React from 'react';
import DateBirthday from '../DateBirthday/DateBirthday';
import ProjectList from '../ProjectList/ProjectList';


export default {
    SECTIONS: [
        {
            id: 0,
            title: "О себе",
            width: "100%",
            content: <div className="card__body">
				Привет! Меня зовут Бакшанский Владислав Дмитриевич, мне <DateBirthday dateBirthday="2000-10-03T15:00:00" />, и я программист.
				Моя первая работа в IT-сфере была контент-менеджером в универе.
                По сути кроме ухода за сайтом, я дорабатывал функционал и добавлял фичи как на PHP, так и на JS.
			</div>
		}, {
            id: 1,
            title: "Мои проекты",
            content: <div className="card__body">
                Список моих проектов с технологиями, которые использовались во время их разработки.
            </div>,
            stuff: <ProjectList />
        }
    ],
    SOCIALLINKS: [
        {
			id: 1,
			link: "https://www.linkedin.com/in/vladislav-bakshanskij-02aa161b3",
			name: "LinkedIn"
		}, {
			id: 3,
			link: "https://twitter.com/vladbakshanskij",
			name: "Twitter"
		}, {
			id: 4,
			link: "https://www.instagram.com/__vlad_bk__/",
			name: "Instagram"
		}, {
			id: 5,
			link: "https://vk.com/swap101",
			name: "Vk"
		}, {
			id: 6,
			link: "https://t.me/vladBakshanskij",
			name: "Telegram"
		}, {
			id: 7,
			link: "https://github.com/vladislavBakshanskij",
			name: "GitHub"
		}
    ],
	EMAIL: "vbakshanskij2000@gmail.com",
	PROJECTS: [
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
    ]
};
