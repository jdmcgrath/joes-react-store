import React, { useState } from 'react';
import styles from './Product.module.scss';

const Product = (props) => {
	const { product, updateInCart } = props;

	const [inCart, setInCart] = useState(product.inCart);

	const addToCart = () => {
		toggleAddToCart();
		setInCart(!inCart);
	};

	const toggleAddToCart = () => updateInCart(product);

	const getButtonText = () => (!inCart ? 'Add to Cart' : 'Item in Cart');

	const getButtonStyle = () => (inCart ? styles.inCart : null);

	const { name, price, img, newArrival } = product;
	return (
		<div className={styles.product}>
			<div className={styles.imageWrapper}>
				<div className={styles.overlay}>
					<button className={getButtonStyle()} onClick={addToCart}>
						{getButtonText()}
					</button>
				</div>
				<img src={img} alt={name} />
				{newArrival ? <span>New Arrival</span> : ''}
			</div>
			<div className={styles.productDetails}>
				<span className={styles.productName}>{name}</span>
				<span className={styles.productPrice}>£{price}</span>
			</div>
		</div>
	);
};

export default Product;
