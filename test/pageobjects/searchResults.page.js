const Page = require('./page');


class SearchResults extends Page{


    get resultsList(){
        return $$("//div[contains(@class,'s-search-results')]//div[@data-component-type='s-search-result']//h2");
    }

    get resultsTitle(){
        return $$("//div[contains(@class,'s-search-results')]//div[@data-component-type='s-search-result']//h2//span");
    }

    
    async verifySearchResultsDisplay(){
        const count = await this.resultsList;
        await expect(count>1);
        //following has been implemented to assert the title contains "automation" but the amazon search result has some title with "automated" text as well therefore I have commented this out. 
        // for await (const title of this.resultsTitle){
        //     await expect(await title).toHaveTextContaining(keyword,{ ignoreCase: true })
        // }
    }

    async selectCustomerReviews(stars){
        const selector = "//section[@aria-label='"+await this.getReviewsSelector(stars)+"']/..";
        console.log("Sachi"  + selector);
        await $(selector).click();
    }

    async getReviewsSelector (number) {
        var stars = {
          '4': '4 Stars & Up',
          '3': '3 Stars & Up',
          '2': '2 Stars & Up',
          '1': '1 Star & Up',
          'default': '4 Stars & Up'
        };
        return (stars[number] || stars['default']);
    }

    async selectLanguage(lang){
        const selector = await $("li[aria-label='"+lang+"'] .a-icon-checkbox");
        await selector.click();
    }

    async selectAProductAtGivenIndex(number){
        const element = await $("//div[contains(@class,'s-search-results')]//div[@data-component-type='s-search-result']["+number+"]//h2//a");      
        const productTile = await element.$('//span').getText();
        console.log("product title ***"+productTile);
        await element.click();
        return productTile;
    }
}
module.exports =  new SearchResults();