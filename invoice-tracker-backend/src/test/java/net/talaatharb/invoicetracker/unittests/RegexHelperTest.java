package net.talaatharb.invoicetracker.unittests;

import net.talaatharb.invoicetracker.helper.RegexHelper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class RegexHelperTest {

    @Test
    public void testTestWithPatternReturnTrueIfCompatibleWithThePattern(){
        boolean mustBeTrue = RegexHelper.testWithPattern("^[a-z]$", "s");
        Assertions.assertTrue(mustBeTrue);
    }

    @Test
    public void testTestWithPatternReturnTrueIfNotCompatibleWithThePattern(){
        boolean mustBeFalse = RegexHelper.testWithPattern("^[1-9]", "h");
        Assertions.assertFalse(mustBeFalse);
    }

    @Test
    public void testEmailRegexNormalBehaviorTrue(){
        boolean mustBeTrue = RegexHelper.testWithPattern(RegexHelper.emailPattern, "some@something.com");
        Assertions.assertTrue(mustBeTrue);
    }

    @Test
    public void testEmailRegexNormalBehaviorFalse(){
        boolean mustBeFalse = RegexHelper.testWithPattern(RegexHelper.emailPattern, "somesomething.com");
        Assertions.assertFalse(mustBeFalse);
    }

    @Test
    public void testEmailRegexByLongStringContainsSpecialCharacters(){
        boolean mustBeFalse = RegexHelper.testWithPattern(RegexHelper.emailPattern, "lskdjflkwjeorilsdkfjsjknvwhe298374928734jwdfjsldkfjoery2o3@#$ASDF@#$!$#^#@#%#%$%&$!$DFSDFWERWVEFGERTADFER@#%%&%^ADF");
        Assertions.assertFalse(mustBeFalse);
    }

    @Test
    public void testPasswordRegexNormalBehaviorTrue(){
        boolean mustBeTrue = RegexHelper.testWithPattern(RegexHelper.passwordPattern, "someStrongPassword#12");
        Assertions.assertTrue(mustBeTrue);
    }

    @Test
    public void testPasswordRegexNormalBehaviorFalse(){
        boolean mustBeFalse = RegexHelper.testWithPattern(RegexHelper.passwordPattern, "password123");
        Assertions.assertFalse(mustBeFalse);
    }

}
