import React from 'react';


/**
 *	Component for footer on my site
 *	render contact information
 * */
export default function Footer() {
    let socialsLinks = [
	{
		id: 1,
	   	link: "",
		name: "LinkedIn"
	}, {
		id: 3,
		link: "",
		name: "Twitter"
	}, {
		id: 4,
		link: "",
		name: "Instagram"
	}, {
		id: 5,
		link: "",
		name: "Vk"
	}, {
		id: 6,
		link: "",
		name: "Telegram"
	}
    ];

    return (
        <footer class="footer"> 
	    <div class="container text-center">
	    	<ul>
	    		{
				socialsLinks.map((link, index) => {
					return (
						<li key={index}>
							<div>
								<a href={`${link.link}`}>{link.name}</a>
							</div>
						</li>
					);
				})
			}
	    	</ul>
	    	<div class="speacial-text">
	    		My email: <span class="email">mail@mail.com</span>
	    	</div>
	    </div>
	    Hello world from Footer! 
	</footer>
    );
}
