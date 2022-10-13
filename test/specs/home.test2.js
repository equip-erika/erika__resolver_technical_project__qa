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
		// value desired, taken from data file
		const compareData = listData[0].secondItemValue; 

		// when the value is taken from the site, it has historically included this badge text
		const badge = await HomePage.listGroupElementBadge(2).getText(); 

		// value from the site
		var value = await HomePage.listGroupElementText(2).getText(); 

		// This is the check to see if the badge text was included in the getText for the site value.
		// If the value, when the length of the value desired is removed and the white spaced trimmed, 
		// is the same text as the badge text, remove the badge text and trim.
		if(value.slice(compareData.length).trim() == badge) {
			value = await value.slice(0, value.length - badge.length).trim(); 
		}
		
		// comparing the trimmed site value to the data file value
		await expect(value).toEqual(compareData);
	})
	it('should have a specific badge value for the second list item', async () => {
		const secondBadge = listData[0].secondItemBadge;
		await expect(HomePage.listGroupElementBadge(2)).toHaveText(secondBadge)
	})
});