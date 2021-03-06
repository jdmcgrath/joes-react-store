import React from 'react';
import styles from './Hero.module.scss';

const Hero = () => {
	return (
		<section className={styles.hero}>
			<div className={styles.heroImageWrapper}></div>
			<div className={styles.heroContent}>
				<div className={styles.heroTitle}>
					<h1>Nourish your Skin</h1>
				</div>
				<div className={styles.heroDetails}>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing. Tenetur repellendus, pariatur non
						quia possimus consequuntur alias natus atque, minima quis.
					</p>
					<button>Shop Now</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
