package net.talaatharb.invoicetracker.utils;

import java.util.regex.Pattern;

public class RegexHelper {
    public static final String EMAIL_PATTERN = "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
    public static final String PASSWORD_PATTERN = "^(?:(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))(?!.*(.)\\1{2,})[A-Za-z0-9!~<>,;:_=?*+#.\"&§%°()\\|\\[\\]\\-\\$\\^\\@\\/]{12,128}$";
    public static final String NO_SPECIAL_CHARS_PATTERN = "^[a-z0-9A-Z]*$";
    
    public static boolean testWithPattern(String pattern, String theString){
        return Pattern.compile(pattern).matcher(theString).matches();
    }
    
    private RegexHelper() {
    }
}
