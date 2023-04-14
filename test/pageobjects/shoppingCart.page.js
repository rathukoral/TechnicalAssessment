const Page = require('./page');


class ShoppingCart extends Page{

   
   get pageTitle(){
    return $('//h1');
   }

   get bookTitle(){
    return $('.sc-item-content-group .sc-grid-item-product-title .a-truncate-full');
   }
   get priceOfCart(){
    return $("//form[@id='activeCartViewForm']//div[@data-name='Subtotals']//span[contains(text(),'$')]");
   }
   get quantity(){
    return $("//form[@id='activeCartViewForm']//span[@class='a-dropdown-prompt']");
   }
   get deleteButton(){
    return $("//input[@value='Delete']");
   }

   
   
    async verifyThePageTitle(title){
        await this.pageTitle.waitForDisplayed({timeout:2000})
        const elementText = await this.pageTitle.getText();
        expect(elementText).toHaveValueContaining(title);
    }

    async getTheSubTotal(){
        return await this.priceOfCart.getText();
    }

    async verifyTheQuantity(number){
        const elementText = await this.quantity.getText();
        console.log("Text is "+await elementText);
         expect(elementText).toHaveText(number);
    }

    async verifyTheItemName(name){
        const elementText = await this.bookTitle.getText();
        expect(elementText).toHaveValueContaining(name);
    }

    async verifySubTotal(total){
        const DisplayedTotal =(await this.getTheSubTotal()).replace(/^./, "");
         expect(await DisplayedTotal).toHaveText(total);         
    }

    async deleteCart(){
        await this.deleteButton.click();
    }
   
    

   

}
module.exports =  new ShoppingCart();