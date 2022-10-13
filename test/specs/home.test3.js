const HomePage = require ('../pageobjects/home.page');
const picklistData = require ('./data/home.test3.data.json');

/**
 * Open home page and ensure the test header exists before performing test.
 * Ensure header is in view.
 */
 before(async () => {
	await HomePage.open();
	await expect(HomePage.testThreeHeader).toBeExisting();
	await HomePage.testThreeHeader.scrollIntoView();
})

describe('the picklist module', () => {
	it('should have a specific default value', async () => {
		const initialValue = picklistData[0].default;
		await expect(HomePage.picklistCurrentlySelected).toHaveText(initialValue);
	})
	it('should be able to select another option', async () => {
		const newValue = picklistData[0].newValue;
		HomePage.picklistSelect(newValue);
		await expect(HomePage.picklistCurrentlySelected).toHaveText(newValue);
	})
});