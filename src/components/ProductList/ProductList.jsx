import React from 'react';
import Product from '../Product';
import styles from './ProductList.module.scss';

const ProductList = (props) => {
	const { products, updateInCart, updateQuantity } = props;

	return (
		<>
			<section className={styles.productList}>
				{products.map((product) => {
					return (
						<Product
							product={product}
							updateInCart={updateInCart}
							updateQuantity={updateQuantity}
						/>
					);
				})}
			</section>
		</>
	);
};

export default ProductList;
