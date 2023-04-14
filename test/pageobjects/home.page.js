class HomePage {
    
   get categoryDropdown() {
    return $('#searchDropdownBox');
   }

   get searchField() {
    return  $("[placeholder='Search Amazon']");
   }

   get searchButton() {
    return $('#nav-search-submit-button');
   }

   async selectACategory(value){
      await this.categoryDropdown.waitForExist({timeout:5000});
      await this.categoryDropdown.selectByAttribute('value', value);
   }

   async typeKeyword(value){
        await this.searchField.clearValue();
        await this.searchField.setValue(value);
   }

   async clickSearchButton(){      
        await this.searchButton.click();
   }

   async searchAKeyword(keyword){
      await this.typeKeyword(keyword);
      await this.clickSearchButton();
   }
   async openHomePage(){
      await browser.url('https://www.amazon.com/')
   }

}
module.exports = new HomePage();