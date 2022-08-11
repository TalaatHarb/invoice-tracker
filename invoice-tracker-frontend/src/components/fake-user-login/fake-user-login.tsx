import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import fakeUserService from '../../services/fake-user-service';
import { userActionCreators, State, UserLoginState } from '../../state';
import './fake-user-login.scss';

export const UserLogin = () => {

    // Fetching action creators
    const dispatch = useDispatch();
    const { dispatchUserLoggedIn, dispatchUserLoggedOut, dispatchTryLogin, dispatchFailedLogin } = bindActionCreators(userActionCreators, dispatch);

    // Fetching the 
    const loggedInUserInfo: UserLoginState = useSelector<State, UserLoginState>((state) => state.user);

    const login = () => {
        return () => {
            dispatchTryLogin();
            fakeUserService.getUserById(1).then(user => dispatchUserLoggedIn({ userName: user.data.username, loggedIn: true, roles: ['Employee'], pending: false })).catch(
                e => dispatchFailedLogin(e));
        }
    };

    const logout = () => {
        return () => dispatchUserLoggedOut();
    };

    return (
        <div>
            <button disabled={loggedInUserInfo.loggedIn} onClick={login()}>Log In</button>
            <button disabled={!loggedInUserInfo.loggedIn} onClick={logout()}>Log Out</button>

            <div>{loggedInUserInfo.userName}</div>
            <div>{loggedInUserInfo.loggedIn}</div>

            <div>
                {loggedInUserInfo.roles.map(role => <div key={role}>{role}</div>)}
            </div>

        </div>
    );
};

export default UserLogin;