import React from 'react';
import './Footer.css';

/**
 *	Component for footer on my site
 *	render contact information
 *  @param { socialsLinks } props
 */
export default function Footer(props) {
	const socialsLinks = props.socialsLinks;
	
	return (
		<footer id="sticky-footer" className="py-4 text-white-50 border-radius-up">
			<div className="container text-center">
				<ul className="list-inline">
					{
						socialsLinks.map((link) => {
							return (
								<li key={link.id.toString()} className="list-inline-item">
									<div>
										<a href={`${link.link === "" ? "#!" : link.link}`} className="text-light">{link.name}</a>
									</div>
								</li>
							);
						})
					}
				</ul>
				<div className="speacial-text">
					My email: <span className="email">
						<a href={`mailto:${props.email}`} className="text-white">
							{props.email}
						</a>
					</span>
				</div>
			</div>
			<div className="container text-center">
				<small>Copyright 2020 &copy; Vladislav Bakshanskij</small>
			</div>
		</footer>
	);
}
