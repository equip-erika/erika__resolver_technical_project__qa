const Page = require('./page');

class HomePage extends Page {

	/**
	 * Open the site. 
	 * @returns url for the home page
	 */
	open() {
		return super.open('index.html');
	}
}

module.exports = new HomePage();