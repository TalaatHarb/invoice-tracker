export type UserLoginState = {
    userName: string;
    loggedIn: boolean;
    roles: string[];
    pending: boolean;
};

export default UserLoginState;
