import React, { useState } from 'react';
import Routes from './containers/Routes';
import NavBar from './components/NavBar';

import catalog from './data/products';

function App() {
	const [products, setProducts] = useState(catalog);

	//
	const updateInCart = (product) => {
		products.inCart = !products.inCart;
		products.quantity = products.inCart ? 1 : 0;
		updateTotal(product);
	};

	const updateQuantity = (product, quantity) => {
		products.quantity = quantity;
		products.quantity > 0 ? updateTotal(product) : updateInCart(product);
	};

	const updateTotal = (product) => {
		products.total = products.price * products.quantity;
		setProducts(product);
	};

	return (
		<>
			<NavBar />
			<Routes products={products} updateInCart={updateInCart} updateQuantity={updateQuantity} />
		</>
	);
}

export default App;
