import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { heroContent } from '../constants';

import Navigation from './Navigation';

export function HeroContent() {
	return (
		<div className='hero-content'>
			<h2>
				<img alt={heroContent.title} src={heroContent.imageUrl} />
			</h2>
			<h3>{heroContent.subtitle}</h3>
			<p>{heroContent.description}</p>
			<ul className='controls'>
				<li>
					<button className='primary-action'>
						<FontAwesomeIcon icon={faPlay} />
						<span>Drink</span>
					</button>
				</li>
				<li>
					<button className='secondary-action'>
						<FontAwesomeIcon icon={faInfoCircle} />
						<span>More Info</span>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default function Hero() {
	return (
		<header className='hero'>
			<img className='hero-image' src='/wine-hero.webp' alt='Wine bottles' />
			<Navigation />
			<HeroContent />
		</header>
	);
}
