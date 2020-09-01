import React from 'react';
import gmail from '../../static/img/Social/gmail.svg';
import instagram from '../../static/img/Social/instagram.svg';
import linkedin from '../../static/img/Social/linkedin.svg';
import telegram from '../../static/img/Social/telegram.svg';
import twitter from '../../static/img/Social/twitter.svg';
import vk from '../../static/img/Social/vk.svg';
import github from '../../static/img/Social/github.svg';
import Config from '../Config/Config';
import List from '../List/List';
import './Contact.css';


/**
 * Simple text border (not containts style)
 * @param { text } props
 */
const Border = (props) => <span>/ {props.text}  /</span>;


/**
 * Component for page contact with me
 * @param { contactLinks, style } props
 */
export default function Contact(props) {
	const contactLinks = props.contactLinks;
	const imgs = {
		LinkedIn: {
			picture: linkedin,
			color: '#0077B7'
		},
		Twitter: {
			picture: twitter,
			color: '#03A8F3'
		},
		Instagram: {
			picture: instagram,
			color: '#F7504D'
		},
		Vk: {
			picture: vk,
			color: '#4D76A1'
		},
		Telegram: {
			picture: telegram,
			color: '#039BE5'
		},
		GitHub: {
			picture: github,
			color: 'black'
		},
	};

	const data = contactLinks.map((link) => {
		const logo = imgs[link.name];

		return (
			<a href={`${link.link}`} key={link.id.toString()}>
				<img src={logo.picture} alt={link.name} style={{width: 50}} className={"d-inline"}/> <strong style={{color: logo.color}}>
					<Border text={link.name}/>
				</strong>
			</a>
		);
	});

	data.push(
		<a href={`mailto:${Config.EMAIL}`}>
			<img src={gmail} alt="gmail" style={{width: 50}} className={"d-inline"}/> <strong>
				<Border text="Email"/>
			</strong>
		</a>
	);

	return (
		<main>
			<div className="container">
				<List
					classNameList="list-group"
					classNameItem="list-group-item shadow-lg mb-2"
					data={data}
					style={{
						fontSize: '25px',
						width: 'fit-content',
						textAlign: 'left',
						marginLeft: 'auto',
						marginRight: 'auto',
						fontFamily: 'Montserrat, sans-serif'
					}}
				/>
			</div>
		</main>
	);
}
