import React, { useState } from 'react';
import styles from './ShoppingCartItem.module.scss';

const ShoppingCartItem = (props) => {
	const { product, updateInCart, updateQuantity, refreshCart } = props;
	const { name, img, quantity, total, price } = product;

	let [number, setNumber] = useState(quantity);

	const removeFromCart = () => {
		updateInCart(product);
		refreshCart(refreshCart);
	};

	const updateProductQuantity = (amount) => {
		setNumber((number += amount));
		updateQuantity(product, number);
	};

	return (
		<div className={styles.shoppingCartItem}>
			<div className={styles.itemDetailsContainer}>
				<div className={styles.itemImg}>
					<img src={img} alt={name} />
				</div>
				<div className={styles.itemInfo}>
					<span>
						<h2>{name}</h2>
					</span>
					<div className={styles.itemRemove}>
						<a onClick={removeFromCart}>Remove</a>
					</div>
				</div>
			</div>
			<div className={styles.itemPrice}>£{price}</div>
			<div className={styles.itemQuantity}>
				<button onClick={() => updateProductQuantity(-1)} disabled={quantity < 2}>
					-
				</button>
				<span>{number}</span>
				<button onClick={() => updateProductQuantity(1)}>+</button>
			</div>
			<div className={styles.itemTotal}>£{total}</div>
		</div>
	);
};

export default ShoppingCartItem;
