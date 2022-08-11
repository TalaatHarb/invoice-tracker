import { UserLoginState } from './user.state';
import { UserAction, UserActionType } from './user.actions'

export const userLoginInitialState: UserLoginState = {
    userName: '',
    loggedIn: false,
    roles: [],
    pending: false,

};

const handleTryLogin = () => {
    return { ...userLoginInitialState, pending: true };
};

const handleFailedLogin = () => {
    return { ...userLoginInitialState, pending: false };
};

const handleLogin = (loggedUserInfo: UserLoginState): UserLoginState => {
    return { ...loggedUserInfo };
}

const handleLogout = (): UserLoginState => {
    return { ...userLoginInitialState };
}

export const userReducer = (state: UserLoginState = userLoginInitialState, action: UserAction): UserLoginState => {
    switch (action.type) {
        case UserActionType.LOGIN:
            return handleLogin(action.payload);
        case UserActionType.LOGOUT:
            return handleLogout();
        case UserActionType.TRY_LOGIN:
            return handleTryLogin();
        case UserActionType.FAILED_LOGIN:
            return handleFailedLogin();
        default:
            return state;
    }
};

export default userReducer;
