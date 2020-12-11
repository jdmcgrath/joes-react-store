import React from 'react';
import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero tests', () => {
	it('should render', () => {
		expect(render(<Hero />)).toBeTruthy();
	});
});
