import React from 'react';
import { render, screen } from '@testing-library/react';
import Page1 from './page1';

describe('fake-page1', () => {
  it('renders learn react link', () => {
    render(<Page1 />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });
});
