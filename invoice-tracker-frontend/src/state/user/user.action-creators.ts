import { Dispatch } from 'redux';
import { FailedLoginAction, LoginAction, LogoutAction, TryLoginAction, UserActionType } from './user.actions';
import UserState from './user.state';

export const dispatchUserLoggedIn = (loggedInInfo: UserState) => {
    return (dispatch: Dispatch<LoginAction>) => dispatch({type: UserActionType.LOGIN, payload: loggedInInfo});
}

export const dispatchUserLoggedOut = () => {
    return (dispatch: Dispatch<LogoutAction>) => dispatch({type: UserActionType.LOGOUT});
}

export const dispatchTryLogin = () => {
    return (dispatch: Dispatch<TryLoginAction>) => dispatch({type: UserActionType.TRY_LOGIN});
}

export const dispatchFailedLogin = (e: any) => {
    return (dispatch: Dispatch<FailedLoginAction>) => dispatch({type: UserActionType.FAILED_LOGIN, payload: e});
}