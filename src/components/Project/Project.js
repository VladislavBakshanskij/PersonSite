import React from 'react';
import List from '../List/List';

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {
                'COVID-19-STATE': {
                    id: 0,
                    name: 'Счетчик мировой статиски по COVID-19',
                    desc: '',
                    tech: '',
                    task: '',
                    link: 'https://github.com/VladislavBakshanskij/COVID-19'
                },
                'CFAS': {
                    id: 1,
                    name: 'Система помощи и прогнозирования сельскохозяйственных решений',
                    desc: '',
                    tech: '',
                    task: '',
                    link: 'https://github.com/VladislavBakshanskij/CFAS'
                },
                'CIP': {
                    id: 2,
                    name: 'Сайт-открытка на день рождение',
                    desc: '',
                    tech: '',
                    task: '',
                    link: 'https://cuteinpocket.herokuapp.com/'
                },
                'Minecraft': {
                    id: 3,
                    name: 'Simple minecraft',
                    desc: '',
                    tech: '',
                    task: '',
                    link: 'https://github.com/VladislavBakshanskij/Minecraft'
                },
                'eltest': {
                    id: 4,
                    name: 'Сайт по заказу на wordpress',
                    desc: '',
                    tech: '',
                    task: '',
                    link: 'http://eltest.tw1.ru/'
                },
                'COVID-19': {
                    id: 5,
                    name: '',
                    desc: '',
                    tech: '',
                    task: '',
                    link: ''
                },
                'ab-list': {
                    id: 6,
                    name: 'Страница для выбора направления абитуриентов',
                    desc: '',
                    tech: '',
                    task: '',
                    link: 'https://kubsau.ru/ab-list/'
                }, 'Solid-Runner': {
                    id: 7,
                    name: 'Solid Runner (StartUp)',
                    desc: '',
                    tech: '',
                    task: '',
                    link: '#!'
                }, 'COVID-19': {
                    id: 8,
                    name: 'Анализ и визуализация данных по COVID-19',
                    desc: 'Some description',
                    tech: ['Python', 'tensorflow', 'keras', 'pandas', 'numpy'],
                    task: ['Visual', ' Analasys'],
                    link: 'https://colab.research.google.com/drive/1nRSz4VVhms6cWkQiUv60TPHyVQCKVSMI?usp=sharing'
                }
            },
            key: this.props.match.params.projectName,
            isPhone: window.innerWidth <= 600
        }
    }

    render() {
        const data = this.state.data[this.state.key];
        const style = {marginTop: 5, marginBottom: 5 };
        
        return (
            <div className="container" style={{marginTop: 10, marginBottom: 10 }}>
                <div className="card shadow-lg">
                    <div className="card-body">
                        <h4 className="card-title">{data.name}</h4>
                        <div className="card-text" style={style}>{data.desc}</div>
                        <hr/>
                        <div className="container mb-3">
                            <h6 className="card-subtitle mb-2 text-muted">Технологии</h6>
                            <div className="card-text" style={style}>
                                <List data={data.tech} style={{
                                    width: 'fit-content',
                                    textAlign: 'rigth'
                                }}/>
                            </div>
                        </div>
                        <div className="container">
                            <h6 className="card-subtitle mb-2 text-muted">Задачи</h6>
                            <div className="card-text" style={style}>
                                <List data={data.task} style={{
                                    width: 'fit-content',
                                    textAlign: 'rigth'
                                }}/>
                            </div>
                        </div>
                        <hr/>
                        <a href={`${data.link}`} className="btn btn-primary shadow">К проекту</a>
                    </div>
                </div>
            </div>
        );
    }
}