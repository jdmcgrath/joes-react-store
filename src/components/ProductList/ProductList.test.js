import React from 'react';
import { render } from '@testing-library/react';
import ProductList from './ProductList';

describe('ProductList tests', () => {
	it('should render', () => {
		expect(render(<ProductList />)).toBeTruthy();
	});
});
