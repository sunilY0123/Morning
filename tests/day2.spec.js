const {test,expect}=require("@playwright/test")

test("print title",async({page})=>{
 await page.goto("https://flipkart.com/");

});