import React from 'react';
import { Link } from '@reach/router';
import styles from './NavBar.module.scss';

import bagIcon from '../../assets/shopping-bag-icon.svg';

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			<Link to="/react-store-app">
				<span className={styles.logo}>
					B<span>o</span>tanicals
				</span>
			</Link>
			<div className={styles.cartIcon}>
				<Link to="/react-store-app/cart">
					<img src={bagIcon} alt="Shopping Bag" />
				</Link>
			</div>
		</nav>
	);
};

export default NavBar;
