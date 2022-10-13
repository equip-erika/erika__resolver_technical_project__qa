const HomePage = require ('../pageobjects/home.page');
const listData = require('./data/home.test2.data.json');

/**
 * Open home page and ensure the test header exists before performing test.
 */
 before(async () => {
	await HomePage.open();
	await expect(HomePage.testTwoHeader).toBeExisting();
})

describe('the list module', () => {
	it('should have a specific length of values', async () => {
		const count = listData[0].listLength;
		await expect(HomePage.listGroup).toHaveChildren(count);
	})
	it('should have a specific value in the second list item', async () => {
		const secondValue = listData[0].secondItemValue;
		
		// TO DO: Update test to compare exact text to exact text.
		// listGroupElementText currently pulls the list text with the badge text.
		// This needs to be fixed to compare text without the badge.
		// EG the text returned is "List Item 2 4", where 4 is the badge text.
		await expect(HomePage.listGroupElementText(2)).toHaveTextContaining(secondValue);
	})
	it('should have a specific badge value for the second list item', async () => {
		const secondBadge = listData[0].secondItemBadge;
		await expect(HomePage.listGroupElementBadge(2)).toHaveText(secondBadge)
	})
});