const Page = require('./page');


class CartPage extends Page{

   
   get addToCartText(){
    return $("//span[contains(text(),'Added to Cart')]");
   }

   get goToCart(){
    return $("//div[@id='sw-atc-actions']//a[contains(text(),'Go to Cart')]");
   }
   
    async verifyAddedToCartTextDisplay(){
        await this.addToCartText.waitForDisplayed({timeout:2000})
        const elementText = await this.addToCartText.getText();
        console.log("elet text is  "+ elementText);
        await expect(this.addToCartText).toBeDisplayed();
    }
   
    async clickGoToCart(){
        await this.goToCart.click();
    }

   

}
module.exports =  new CartPage();