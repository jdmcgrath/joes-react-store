import React from 'react';
import Hero from '../Hero';
import ProductList from '../ProductList';

const Main = (props) => {
	const { products, updateInCart, updateQuantity } = props;
	return (
		<>
			<Hero />
			<ProductList
				products={products}
				updateInCart={updateInCart}
				updateQuantity={updateQuantity}
			/>
		</>
	);
};

export default Main;
