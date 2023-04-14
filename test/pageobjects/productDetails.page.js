const Page = require('./page');


class ProductDetails extends Page{

   
    get productTitle(){
        return $("//span[@id='productTitle']");
    }

    get unitPrice(){
        return $("//div[@id='corePrice_feature_div']//span[@class='a-offscreen']");
    }

    get quantity(){
        return $("[name='quantity']");
    }

    get addToCartButton(){
        return $("[title='Add to Shopping Cart']");
    }

    async verifyProductTile(title){
        await this.productTitle.waitForDisplayed({timeout:2000})
        const elementText = await this.productTitle.getText();
        expect(elementText).toHaveTextContaining(title);
    }

    async getTheUnitPrice(){
        return await this.unitPrice.getText();
    }

    async selectAQuantity(number){
        await this.quantity.selectByAttribute('value', number);
    }

    async clickAddToCart(){
        await this.addToCartButton.click();
    }

   

}
module.exports =  new ProductDetails();