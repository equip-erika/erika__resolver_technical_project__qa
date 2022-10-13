const HomePage = require ('../pageobjects/home.page');
const tableData = require ('./data/home.test6.data.json');

/**
 * Open home page and ensure the test header exists before performing test.
 * Ensure header is in view.
 */
 before(async () => {
	await HomePage.open();
	await expect(HomePage.testSixHeader).toBeExisting();
	await HomePage.testSixHeader.scrollIntoView();
})

describe('the table module', () => {
	it('should have specific data in cell 2, 2', async () => {
		const data = tableData[0].appName;
		await expect(HomePage.getTableValue(2,2)).toHaveText(data);
	})
});