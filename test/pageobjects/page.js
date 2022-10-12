/**
* Main page object containing all methods, selectors and functionality
* that is shared across all page objects.
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        // TO DO investigate why baseurl is not pre-appending 
        // should NOT require process.cwd() here
        return browser.url(process.cwd() + `/site/${path}`)
    }
}
