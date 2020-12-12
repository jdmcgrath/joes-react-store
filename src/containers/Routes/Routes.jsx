import React from 'react';
import { Router } from '@reach/router';

import Main from '../../components/Main';
import ShoppingCart from '../../components/ShoppingCart';

const Routes = (props) => {
	const { products, updateInCart, updateQuantity } = props;

	return (
		<Router>
			<Main
				path="/"
				products={products}
				updateInCart={updateInCart}
				updateQuantity={updateQuantity}
			/>
			<ShoppingCart
				path="cart"
				products={products}
				updateInCart={updateInCart}
				updateQuantity={updateQuantity}
			/>
		</Router>
	);
};

export default Routes;
