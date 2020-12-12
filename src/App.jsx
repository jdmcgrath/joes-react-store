import React, { useState } from 'react';
import Routes from './containers/Routes';
import NavBar from './components/NavBar';

import catalog from './data/products';

function App() {
	const [products, setProducts] = useState(catalog);

	const updateInCart = (product) => {
		product.inCart = !product.inCart;
		product.quantity = product.inCart ? 1 : 0;
		updateTotal(product);
	};

	const updateQuantity = (product, quantity) => {
		product.quantity = quantity;
		product.quantity > 0 ? updateTotal(product) : updateInCart(product);
	};

	const updateTotal = (product) => {
		product.total = product.price * product.quantity;
		setProducts(products);
	};

	return (
		<>
			<NavBar />
			<Routes products={products} updateInCart={updateInCart} updateQuantity={updateQuantity} />
		</>
	);
}

export default App;
