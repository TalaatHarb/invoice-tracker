import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import UserLogin from './fake-user-login';
import { Provider } from 'react-redux';
import { createApplicationStore } from '../../state';
import fakeUserService from '../../services/fake-user-service';
import { FakeUser } from '../../models/fake-user.model';

jest.mock('../../services/fake-user-service');

describe('fake user login component', () => {
  it('should render buttons', () => {
    render(
      <Provider store={createApplicationStore()}>
        <UserLogin />
      </Provider>
    );

    const loginButton = screen.getByText(/Log In/i);
    const logoutButton = screen.getByText(/Log Out/);

    expect(loginButton).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
  });

  it('should call getUserById when login button clicked', async () => {
    const mockedFakeUserService = fakeUserService as jest.Mocked<
      typeof fakeUserService
    >;
    const fakeUser: FakeUser = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
    };

    mockedFakeUserService.getUserById.mockResolvedValueOnce({
      data: fakeUser,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    });

    render(
      <Provider store={createApplicationStore()}>
        <UserLogin />
      </Provider>
    );

    const loginButton = screen.getByText(/Log In/i);

    await fireEvent.click(loginButton);

    await waitFor(() =>
      expect(mockedFakeUserService.getUserById).toHaveBeenCalledWith(
        fakeUser.id
      )
    );

    await waitFor(() => expect(loginButton).toBeDisabled());
  });

  it('should enable log-in button when failure to login and enable/disable correct buttons', async () => {
    const mockedFakeUserService = fakeUserService as jest.Mocked<
      typeof fakeUserService
    >;

    mockedFakeUserService.getUserById.mockRejectedValue('Error');
    render(
      <Provider store={createApplicationStore()}>
        <UserLogin />
      </Provider>
    );

    const loginButton = screen.getByText(/Log In/i);
    const logoutButton = screen.getByText(/Log Out/);

    await fireEvent.click(loginButton);

    await waitFor(() =>
      expect(mockedFakeUserService.getUserById).toHaveBeenCalled()
    );

    await waitFor(() => expect(loginButton).toBeEnabled());

    expect(logoutButton).toBeDisabled();
  });
});
