package net.talaatharb.invoicetracker;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertSame;

import org.junit.jupiter.api.Test;

public interface EqualityTest<T> {

	public abstract T create();

	@Test
	default void testEquality() {
		T t1 = create();
		T t2 = create();
		
		// Object equal to itself
		assertSame(t1, t1);
		
		// Entity equal to same fields Object
		assertEquals(t1, t2);
		
		// Hash codes are equal for objects that are equal
		assertEquals(t1.hashCode(), t2.hashCode());
		
		// ToString is equal for equal entities
		assertEquals(t1.toString(), t2.toString());
	}
}
