import React from 'react';
import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart tests', () => {
	it('should render', () => {
		expect(render(<ShoppingCart />)).toBeTruthy();
	});
});
