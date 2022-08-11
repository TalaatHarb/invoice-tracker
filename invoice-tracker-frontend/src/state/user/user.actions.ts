import { UserLoginState } from './user.state';

export enum UserActionType{
    TRY_LOGIN = 'TRY_LOGIN',
    FAILED_LOGIN = 'FAILED_LOGIN',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',

}

export type TryLoginAction = {
    type: UserActionType.TRY_LOGIN,

}

export type FailedLoginAction = {
    type: UserActionType.FAILED_LOGIN,
    payload: any,
    
}

export type LoginAction = {
    type: UserActionType.LOGIN,
    payload: UserLoginState,

}

export interface LogoutAction {
    type: UserActionType.LOGOUT,

}

export type UserAction = TryLoginAction | FailedLoginAction | LoginAction | LogoutAction;

export default UserAction;
