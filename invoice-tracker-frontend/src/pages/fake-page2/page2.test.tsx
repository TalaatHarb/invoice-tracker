import React from 'react';
import { render } from '@testing-library/react';
import Page2 from './page2';
import { createApplicationStore } from '../../state';
import { Provider } from 'react-redux';


describe('fake-page2', () => {
  it('renders correctly', () => {
    render(
      <Provider store={createApplicationStore()}>
        <Page2 />
      </Provider>
    );
  });
});
