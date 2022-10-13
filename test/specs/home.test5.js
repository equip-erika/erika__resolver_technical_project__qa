const HomePage = require ('../pageobjects/home.page');

/**
 * Open home page and ensure the test header exists before performing test.
 * Ensure header is in view.
 */
 before(async () => {
	await HomePage.open();
	await expect(HomePage.testFiveHeader).toBeExisting();
	await HomePage.testFiveHeader.scrollIntoView();
})

describe('the delayed display module', () => {
	it('should have a button appear eventually', async () => {
		await HomePage.delayedButton.waitForDisplayed();
	})
	it('should be able to click the button and it should act as expected', async () => {
		await expect(HomePage.delayedButton).toBeEnabled(); // button should start enabled
		await expect(HomePage.buttonSuccessAlertDisabled).toExist(); // success alert should be disabled
		
		HomePage.clickDelayedButton();

		await expect(HomePage.buttonSuccessAlert).toBeEnabled(); // success alert should appear
		await expect(HomePage.delayedButton).toBeDisabled(); // button should disable
	})
});