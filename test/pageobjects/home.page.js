const Page = require('./page');

class HomePage extends Page {

	/**
	 * H1 header element.
	 * @param {String} text text that is displayed in the H1 header
	 * @returns header h1 element
	 */
	header(text) {
		return $(`//h1[text() = "${text}"]`)
	}

	/**
	 * Get header element for Test 1.
	 */
	get testOneHeader() {
		return this.header("Test 1");
	}

	/**
	 * Get header element for Test 2.
	 */
	 get testTwoHeader() {
		return this.header("Test 2");
	}
	
	/**
	 * Get login email field element.
	 */
	get loginEmailField() {
		return $(`//form[@class="form-signin"]/input[@type = "email"]`);
	}

	/**
	 * Get login password field element.
	 */
	get loginPasswordField() {
		return $(`//form[@class="form-signin"]/input[@type= "password"]`);
	}

	/**
	 * Get sign in button element.
	 */
	get loginSignInButton() {
		return $('//form[@class="form-signin"]/button[@type= "submit"]');
	}

	/**
	 * Click the sign in button element.
	 */
	clickLoginSignInButton() {
		this.loginSignInButton.click();
	}

	/**
	 * The list and all the contents.
	 */
	get listGroup() {
		return $('//ul[@class = "list-group"]');
	}

	/**
	 * An element in the List Group. Starts at 1.
	 * @param {Number} elementNumber Which list element, starts at 1
	 * @returns element for the specific list
	 */
	listGroupElementText(elementNumber) {
		return $('//ul[@class = "list-group"]/li[' + elementNumber + ']');
	}

	/**
	 * Badge element in the List Group. Starts at 1.
	 * @param {Number} elementNumber Which list element, starts at 1
	 * @returns badge element for the specific list
	 */
	listGroupElementBadge(elementNumber) {
		return $('//ul[@class = "list-group"]/li[' + elementNumber + ']/span');
	}

	/**
	 * Open the home page. 
	 * @returns url for the home page
	 */
	open() {
		return super.open('index.html');
	}

}

module.exports = new HomePage();