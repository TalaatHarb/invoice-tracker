// globaly used variables

import { CONSTANTS } from "./constants";

export const SERVER = `${CONSTANTS.BACKEND_URL}`;

export const ERROR = "error";

// Minimum 12 characters, at least one uppercase letter, one lowercase letter and one number:
export const passwordRegex = /^(?:(?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\1{2,})[A-Za-z0-9!~<>,;:_=?*+#."&§%°()\|\[\]\-\$\^\@\/]{12,128}$/;

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const TWENTY_MEGAS = 20 * 1024 * 1024;