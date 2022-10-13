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
	 * Get header element for Test 3.
	 */
	 get testThreeHeader() {
		return this.header("Test 3");
	}

	/**
	 * Get header element for Test 4.
	 */
	 get testFourHeader() {
		return this.header("Test 4");
	}

	/**
	 * Get header element for Test 5.
	 */
	 get testFiveHeader() {
		return this.header("Test 5");
	}

	/**
	 * Get header element for Test 6.
	 */
	 get testSixHeader() {
		return this.header("Test 6");
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
	 * Currently selected picklist value.
	 */
	get picklistCurrentlySelected() {
		return $('//div[@class = "dropdown"]/button[@id="dropdownMenuButton" and @aria-expanded="false"]');
	}

	/**
	 * Set picklist to another value.
	 * @param {String} option picklist option to select
	 */
	picklistSelect(option) {
		this.picklistCurrentlySelected.click();
		$(`//div[@class="dropdown-menu show"]/a[text() = "${option}"]`).click();
	}

	/**
	 * Primary button in the test 4 div.
	 */
	get primaryButton() {
		return $('//div[@id="test-4-div"]/button[contains(@class,"btn-primary")]');
	}

	/**
	 * Secondary button in the test 4 div.
	 */
	get secondaryButton() {
		return $('//div[@id="test-4-div"]/button[contains(@class,"btn-secondary")]');
	}

	/**
	 * Button for test 5.
	 */
	get delayedButton() {
		return $('//button[@id="test5-button"]');
	}

	/**
	 * Click the button that delays appearing.
	 */
	clickDelayedButton() {
		this.delayedButton.click();
	}

	/**
	 * Get the success text for clicking the button.
	 */
	get buttonSuccessAlert() {
		return $('//div[@id="test5-alert"]');
	}

	/**
	 * Get the sucecss text in its disabled state.
	 */
	get buttonSuccessAlertDisabled() {
		return $('//div[@id="test5-alert"][@style="display: none;"]');
	}

	/**
	 * Count for the table cells starts in the top left, below the headers. 
	 * @param {Number} x starts at 0, column of the table
	 * @param {Number} y starts at 0, row of the table
	 * @returns selector for the cell coordinates entered
	 */
	getTableValue(x,y) {
		return $(`//table/tbody/tr[${x}+1]/td[${y}+1]`);
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