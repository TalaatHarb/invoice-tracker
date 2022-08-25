package net.talaatharb.invoicetracker.utils;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class RegexHelperTest {

	@Test
	void testWithValidEmailPattern() {
		boolean result = RegexHelper.testWithPattern(RegexHelper.EMAIL_PATTERN, "a@a.com");
		assertTrue(result);
	}

}
