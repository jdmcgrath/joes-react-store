import React from 'react';
import { render } from '@testing-library/react';
import ShoppingCartItem from './ShoppingCartItem';

describe('ShoppingCartItem tests', () => {
	it('should render', () => {
		expect(render(<ShoppingCartItem />)).toBeTruthy();
	});
});
