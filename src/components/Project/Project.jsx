import React from 'react';
import List from '../List/List';


/**
 * Component for detail project page
 */
export default class Project extends React.Component {
    /**
     * @param props
     */
    constructor(props) {
        super(props);

        this.state = {
            data: {
                'COVID-19-STATE': {
                    id: 0,
                    name: 'Счетчик мировой статиски по COVID-19',
                    desc: 'Консольная утилита для просмотра изменений статистики по COVID-19.',
                    tech: ['C# 8', '.Net Core 3.1', 'Console', 'AngleSharp', 'Async'],
                    task: ['Сбор данных по COVID-19', 'Сериализация данных', 'Парсинг DOM-элементов'],
                    link: 'https://github.com/VladislavBakshanskij/COVID-19'
                },
                'CFAS': {
                    id: 1,
                    name: 'Система помощи и прогнозирования сельскохозяйственных решений',
                    desc: 'Система помощи и прогнозирования сельскохозяйственных решений, реализующая древовидную структуру и показывающая дерево решений.',
                    tech: ['C#', '.Net Framework', 'Windows Forms', 'WPF', 'Git'],
                    task: [
                        'Реализиация модели',
                        'Вывод возможных альтернативных вариантов прогноза',
                        'Отрисовка дерева',
                        'Отрисовка эффертивной ветки',
                        'Вывод данных на дереве с периодом'
                    ],
                    link: 'https://github.com/VladislavBakshanskij/CFAS',
                    partners: ["Лада Дунская"]
                },
                'CIP': {
                    id: 2,
                    name: 'Сайт-открытка на день рождение',
                    desc: 'Поздравление дипломного руководителя с днем рождения.',
                    tech: ['Python', 'Django', 'Git', 'HTML', 'CSS', 'JS', 'Bootstrap', 'Google Sheets API', 'Google Drive API'],
                    task: ['Верстка страницы congratulation', 'Налаживание pipline для автоматического deploy на heroku'],
                    link: 'https://cuteinpocket.herokuapp.com/',
                    partners: ["Лада Дунская"]
                },
                'Minecraft': {
                    id: 3,
                    name: 'Simple minecraft',
                    desc: 'Простой майнкрафт с базовым фукнционалом.',
                    tech: ['C++', 'OpenGL', 'glut', 'SFML'],
                    task: ['Реализация базового трехмерного пространства', 'Реализация передвижения', 'Реализация добавления и удаления блоков'],
                    link: 'https://github.com/VladislavBakshanskij/Minecraft'
                },
                'eltest': {
                    id: 4,
                    name: 'Сайт по заказу на wordpress',
                    desc: 'Сайт на wordpress по заказу начальника отдела web-проектов. Информации было маловато, поэтому он такой и вышел.',
                    tech: ['PHP', 'HTML', 'CSS', 'JS', 'WordPress'],
                    task: ['Создание страниц по заданной теме', 'Заполнений разделов информацией', 'Добавления дополнительных разделов', 'Добавление раздела со статьями и публикациями'],
                    link: 'http://eltest.tw1.ru/'
                },
                'COVID-19': {
                    id: 5,
                    name: 'Анализ и визуализация данных по COVID-19',
                    desc: 'Some description',
                    tech: ['Python', 'tensorflow', 'keras', 'pandas', 'numpy'],
                    task: ['Визуализация данных', 'Анализ данных', 'Построение и проверка гипотез о росте подтвердженных и зараженных случаях'],
                    link: 'https://colab.research.google.com/drive/1nRSz4VVhms6cWkQiUv60TPHyVQCKVSMI?usp=sharing'
                },
                'ab-list': {
                    id: 6,
                    name: 'Страница для выбора направления абитуриентов',
                    desc: 'Помощь абитуриентов в нахождении своего текущего места в списках на зачисление.',
                    tech: ['PHP', 'HTML', 'CSS', 'JS', 'Bootstrap', 'jQuery', 'Ajax', 'Promise'],
                    task: ['Верстка страницы', 'Создание API для выброса данных', 'Парсинг Ajax запроса'],
                    link: 'https://kubsau.ru/ab-list/'
                }, 'Solid-Runner': {
                    id: 7,
                    name: 'Solid Runner (StartUp)',
                    desc: 'Вы играете за кубик, разбивая стекла с получением очков. Ваш персонаж владеет замедлением временем по необходимости. Жанр игры аркада.',
                    tech: ['C#', 'Unity', 'Blender'],
                    task: [
                        'Реализация генерации игрового мира',
                        'Реализация замедления времени',
                        'Объединение объектов в статический меш',
                        'Тестирование проекта'
                    ],
                    link: '#!',
                    partners: ["Николай Накоркешко", "Радион Аскаров"]
                }, 'personSite': {
                    id: 8,
                    name: 'Персональный сайт',
                    desc: 'Персональный сайт демонстрирующий портфолио.',
                    tech: ['JS', 'CSS', 'Bootstrap', 'React', 'Git'],
                    task: [
                        'Создание сайта для демонстрации порфолио',
                        'Создание главной компоненты',
                        'Создание компоненты контаков',
                        'Создание компоненты список, секция',
                        'Поддержка и дополнение'
                    ],
                    link: 'https://github.com/VladislavBakshanskij/PersonSite'
                }, 'smsActivateApi': {
                    id: 9,
                    name: 'Api для взаимодействия с SMS-Activate',
                    desc: 'Библиотека для создания приложений, которые будут взаимодействовать с SMS-Activate,' +
                        ' написанных на JVM-языках.',
                    tech: ['Java 8', 'Maven', 'GSON'],
                    task: [
                        'Создание осн. класса API, DTO и вспогательных классов',
                        'Тестирование API',
                        'Написание документации',
                        'Публикация в Maven Central Repository'
                    ],
                    href: 'https://github.com/Sms-activate/SMSActivateApi'
                }, 'smsActivateAdmin': {
                    id: 10,
                    name: 'Приложение для регулирование процессами',
                    desc: 'Админнистротивное приложение, созданное на JavaFx, через которое производилась работа с регулированием цен,' +
                        ' добавлением сервисов и стран, конкурентами, добавлением прав пользователей,' +
                        ' просмотром статистики по продажам. Система сборки не использовалась.' +
                        ' Так же при создании, каждого функционала нужно было дописывать в прослойку между сервером и клиентом,' +
                        ' события и DTO классы. После чего шло написание серверного кода вместе с SQL запросами. К слову, на проекте' +
                        ' сервер был написан на Tomcat и Servletах, к БД подключались через JDBC с пуллом Connectionов c3p0 через прослойку' +
                        ' меж запросами и кодом, который его вызывает.',
                    tech: ['Java 8', 'JavaFx'],
                    task: [
                        'Добавления окна сопоставления стран',
                        'Отображение статистики продажи агентов',
                        'Отображение статистики по покупке аренды по определенному оператору',
                        'Устранение багов в приложении',
                        'Поддержка приложения',
                        'Улучшение производительности',
                        'Ручное тестирование приложения',
                        'Создание ant-скриптов для минизации сборки с использованием ProGuard'
                    ],
                    href: '#'
                }
            },
            key: this.props.match.params.projectName
        }
    }

    render() {
        const data = this.state.data[this.state.key];
        const styles = {
            mtb5: {
                marginTop: 5,
                marginBottom: 5
            },
            mtb10: {
                marginTop: 10,
                marginBottom: 10
            },
            list: {
                width: 'fit-content',
                textAlign: 'Right'
            }
        };

        return (
            <main>
                <div className="container" style={styles.mtb10}>
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h4 className="card-title">{data.name}</h4>
                            <div className="card-text" style={styles.mtb5}>{data.desc}</div>
                            <hr/>
                            <div className="container mb-3">
                                <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: 20}}>Технологии</h6>
                                <div className="card-text" style={styles.default}>
                                    <List
                                        classNameList="list-group"
                                        classNameItem="list-group-item shadow-sm mb-3 card__body shadow__hover"
                                        data={data.tech}
                                        style={styles.list}
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="container">
                                <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: 20}}>Задачи</h6>
                                <div className="card-text" style={styles.mtb5}>
                                    <List
                                        classNameList="list-group"
                                        classNameItem="list-group-item shadow-sm mb-3 card__body shadow__hover"
                                        data={data.task}
                                        style={styles.list}
                                    />
                                </div>
                            </div>
                            <hr className={"mb-3"}/>
                            {
                                data.partners !== undefined ? <div className="container mb-3">
                                    <h6 className="card-subtitle mb-2 text-muted" style={{fontSize: 20}}>Участники проекта</h6>
                                    <div className="card-text" style={styles.mtb5}>
                                        <List
                                            classNameList="list-group"
                                            classNameItem="list-group-item shadow-sm mb-3 card__body shadow__hover"
                                            data={data.partners}
                                            style={styles.list}
                                        />
                                    </div>
                                    <hr className={"mb-3"}/>
                                </div> : ""
                            }
                            <a href={`${data.link}`} className="btn btn-primary shadow">К проекту</a>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}