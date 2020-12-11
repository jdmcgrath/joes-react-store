import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product';

describe('Product tests', () => {
	it('should render', () => {
		expect(render(<Product />)).toBeTruthy();
	});
});
