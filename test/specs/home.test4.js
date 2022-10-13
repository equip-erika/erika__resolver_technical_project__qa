const HomePage = require ('../pageobjects/home.page');

/**
 * Open home page and ensure the test header exists before performing test.
 * Ensure header is in view.
 */
 before(async () => {
	await HomePage.open();
	await expect(HomePage.testFourHeader).toBeExisting();
	await HomePage.testFourHeader.scrollIntoView();
})

describe('the button module', () => {
	it('should have the primary button enabled', async () => {
		await expect(HomePage.primaryButton).toBeEnabled();
	})

	it('should have the secondary button disabled', async () => {
		await expect(HomePage.secondaryButton).toBeDisabled();
	})
});