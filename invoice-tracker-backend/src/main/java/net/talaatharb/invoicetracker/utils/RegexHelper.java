package net.talaatharb.invoicetracker.utils;

import java.util.regex.Pattern;

public class RegexHelper {
    public static final String EMAIL_PATTERN = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
    public static final String PASSWORD_PATTERN = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&()–[{}]:;',?/*~$^+=<>]).{8,20}$";
    public static final String NO_SPECIAL_CHARS_PATTERN = "^[a-z0-9A-Z]*$";
    public static boolean testWithPattern(String pattern, String theString){
        return Pattern.compile(pattern).matcher(theString).matches();
    }
    
    private RegexHelper() {
    }
}
