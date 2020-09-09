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
            content: `
                Список моих проектов с технологиями, которые использовались во время их разработки.
            `,
            stuff: <ProjectList classNameItem="card__body"/>
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
    EMAIL: "vbakshanskij2000@gmail.com"
};
