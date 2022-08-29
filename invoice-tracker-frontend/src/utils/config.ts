// globaly used variables

import { CONSTANTS } from "./constants";

export const SERVER = `${CONSTANTS.BACKEND_URL}`;

export const ERROR = "error";

// Minimum 8 characters, at least one uppercase letter, one lowercase letter one number and one special character:
export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const TWENTY_MEGAS = 20 * 1024 * 1024;