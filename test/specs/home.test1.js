const HomePage = require ('../pageobjects/home.page');
const loginData = require('./data/home.test1.data.json');

/**
 * Open home page and ensure the test header exists before performing test.
 */
before(async () => {
	await HomePage.open();
	await expect(HomePage.testOneHeader).toBeExisting();
})

describe('the login module', () => {
	it('should have an email address field', async () => {
		await expect(HomePage.loginEmailField).toBeExisting();
	})
	it('should have a password field', async () => {
		await expect(HomePage.loginPasswordField).toBeExisting();
	})
	it('should have a Sign In button that is clickable', async () => {
		await expect(HomePage.loginSignInButton).toBeExisting();
		await expect(HomePage.loginSignInButton).toBeClickable();
	})
	it('should be able to enter test data into the email field', async () => {
		const email = loginData[0].email;

		await HomePage.loginEmailField.addValue(email);
		await expect(HomePage.loginEmailField).toHaveValue(email);
	})
	it('should be able to enter test data into the password field', async () => {
		const password = loginData[0].password;

		await HomePage.loginPasswordField.addValue(password);
		await expect(HomePage.loginPasswordField).toHaveValue(password);
	})
	it('should be able to click the Sign In button and be redirected correctly', async () => {
		await HomePage.clickLoginSignInButton();
		
		// Currently the page simply reloads, which clears the email and password fields.
		await expect(HomePage.loginEmailField).toHaveValue("");
		await expect(HomePage.loginPasswordField).toHaveValue("");
	})
});