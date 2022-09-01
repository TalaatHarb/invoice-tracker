package net.talaatharb.invoicetracker;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Tag;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import org.springframework.test.context.ActiveProfiles;

@SpringBootTest
@ActiveProfiles(profiles = "test")
@Tag("integration")
class InvoiceTrackerBackendApplicationIT {
	
	@Autowired
	private ApplicationContext applicationContext;

	@Test
	void testContextLoads() {
		assertNotNull(applicationContext);
	}
}
