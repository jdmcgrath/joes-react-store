import React, { useState } from 'react';
import styles from './ShoppingCart.module.scss';

import Banner from '../Banner';
import ShoppingCartItem from '../ShoppingCartItem';

const ShoppingCart = (props) => {
	const { products, updateInCart, updateQuantity } = props;
	const [cart, setCart] = useState(products.filter((product) => product.inCart));

	const getCartItems = () => {
		return cart.map((product) => (
			<ShoppingCartItem
				product={product}
				updateInCart={updateInCart}
				updateQuantity={updateQuantity}
				refreshCart={refreshCart}
			/>
		));
	};

	const getCartTotal = () => {
		const itemPrices = cart.map((product) => product.total);
		return itemPrices.reduce((total, amount) => total + amount, 0).toFixed(2);
	};

	const refreshCart = () => {
		setCart(products.filter((product) => product.inCart));
	};

	return (
		<>
			<Banner />
			<section className={styles.shoppingCart}>
				<div className={styles.cartContainer}>
					<div className={styles.leftPanel}>
						<h1 className={styles.cartTitle}>Shopping Cart</h1>
						<div className={styles.tableHeadings}>
							<span>Items</span>
							<span>Price</span>
							<span>Quantity</span>
							<span>Total</span>
						</div>
						<div className={styles.shoppingCartItems}>
							{cart.length ? getCartItems() : <p>Your cart is empty.</p>}
						</div>
					</div>
					<div className={styles.rightPanel}>
						<div className={styles.summaryContainer}>
							<h2>Order Summary</h2>
							<div className={styles.summaryItem}>
								<span>
									<h3>Total</h3>
								</span>
								<span>
									<h3>£{getCartTotal()}</h3>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ShoppingCart;
