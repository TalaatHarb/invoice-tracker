package net.talaatharb.invoicetracker.models;

import net.talaatharb.invoicetracker.EqualityTest;

class ResetTokenEntityTest implements EqualityTest<ResetTokenEntity>{

	@Override
	public ResetTokenEntity create() {
		return new ResetTokenEntity(1L, "aaa", new User(), 1L);
	}

}
