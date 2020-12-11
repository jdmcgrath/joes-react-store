import React from 'react';
import styles from './Product.module.scss';

const Product = (props) => {
	const { product, updateInCart, updateQuantity } = props;
	const { name, price, img, newArrival, inCart } = product;

	const getButtonText = () => (!inCart ? 'Add to Cart' : 'Item in Cart');

	const getButtonStyle = () => (inCart ? styles.inCart : null);

	return (
		<div className={styles.product}>
			<div className={styles.imageWrapper}>
				<div className={styles.overlay}>
					<button
						className={getButtonStyle()}
						// onClick={addToCart()}
					>
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
