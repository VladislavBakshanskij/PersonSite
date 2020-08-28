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
 * Component for page contact with me
 * @param { contactLinks, style } props 
 */
export default function Contact(props) {
	const contactLinks = props.contactLinks;
	const imgs = {
		LinkedIn: linkedin,
		Twitter: twitter,
		Instagram: instagram,
		Vk: vk,
		Telegram: telegram,
		GitHub: github,
	};

	const data = contactLinks.map((link) =>  <a href={`${link.link}`}>Я в <strong>{link.name}</strong> <img src={imgs[link.name]} alt={link.name} width="50"/></a>);

	data.push(
		(() => <a href={`mailto:${Config.EMAIL}`}>Моя рабочая почта <img src={gmail} alt="gmail" width="50"/></a>)()
	);

	return (
		<main>
			<div className="container">
				<List data={data} style={{
					width: 'fit-content',
					textAlign: 'center',
					marginLeft: 'auto',
					marginRight: 'auto',
					fontFamily: 'Montserrat, sans-serif'
				}}/>
			</div>
		</main>
	);
}
