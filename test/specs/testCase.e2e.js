const CartPage = require('../pageobjects/cart.page')
const fs = require('fs');
const  HomePage = require('../pageobjects/home.page')
const ProductDetails = require('../pageobjects/productDetails.page')
const SearchResults =require('../pageobjects/searchResults.page')
const ShoppingCart = require('../pageobjects/shoppingCart.page')
const properties = require('properties');
const allureReporter = require('@wdio/allure-reporter')

describe('Test Assessment', () => {
    it('search product on Amazon', async () => {
        allureReporter.addFeature('Feature')
        const props = await new Promise((resolve, reject) => {
            properties.parse('config.properties', { path: true }, (err, data) => {
              if (err) {
                reject(err);
              } else {
                resolve(data);
              }
            });
        });

        const jsonData = JSON.parse(fs.readFileSync('test/testdata/product.json'));
        const testData = jsonData.testCaseOne;


        await browser.url(props.app_url);

       
        await HomePage.selectACategory(testData.searchDropdown); 
        await HomePage.searchAKeyword(testData.searchText);
        await SearchResults.verifySearchResultsDisplay();
        await SearchResults.selectCustomerReviews(testData.reviews);
        await SearchResults.selectLanguage(testData.language);
        const TITLE = await SearchResults.selectAProductAtGivenIndex(testData.productIndex);
        let UNITPRICE = await ProductDetails.getTheUnitPrice();
        UNITPRICE = UNITPRICE.replace(/^./, "");
        console.log("Unit price of the selected product is   -  "+ await UNITPRICE);
        await ProductDetails.verifyProductTile(TITLE);
        await ProductDetails.selectAQuantity(2);
        await ProductDetails.clickAddToCart();
        await CartPage.verifyAddedToCartTextDisplay();
        await CartPage.clickGoToCart();
        await ShoppingCart.verifyThePageTitle();
        await ShoppingCart.verifyTheItemName(TITLE);
       
        let subTotal =  parseFloat(UNITPRICE)*2;
        subTotal = subTotal.toLocaleString("en",{useGrouping: false,minimumFractionDigits: 2});
        await ShoppingCart.verifySubTotal(subTotal);
        await ShoppingCart.verifyTheQuantity("2");

        await ShoppingCart.deleteCart();
        await ShoppingCart.verifySubTotal("0.00");
         
     }) 

    
})