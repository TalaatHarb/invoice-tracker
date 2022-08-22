// globaly used variables

export const SERVER = "http://localhost:8080";

export const ERROR = "error";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter one number and one special character:
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;