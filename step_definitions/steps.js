const { default: click } = require("webdriverio/build/commands/element/click");
const main = require("../pages/main");

const { I } = inject();
// Add in your custom step files

Given('I am at the landing page', () => {
  I.wait(3);
  I.see("Nenno's Pizza");
  I.see("Margherita");
  I.see("Ricci");
  
});

Then("I check if the Nenno's Pizza title appears on the main page", () => {
  I.see("Nenno's Pizza");
    
});

Then("I Check if the title contents price of the Ricci pizza appears on the main page", () => {
  I.see("Ricci");
  I.see("Mozzarella, Ricci");
  I.waitForVisible(main.elements.ricci_title_price);

    
});
When("I Select Ricci pizza",() => {
 I.click("Ricci");
    
});
Then("I Check if the name of the selected pizza / picture of the selected pizza and the Ingredients title appears on the page",() => {
  I.waitForText('Ricci',3);
  I.see('Ingredients');
  I.seeElement(main.elements.pizza_image);
    
});

Then("I Check if the Mozzarella and Ricci ingredients are checked in the list",() => {
  
  I.wait(5);
  I.seeCheckboxIsChecked(main.elements.firstIngchkBox);
  I.seeCheckboxIsChecked(main.elements.lastIngchkBox); 
  
  
    
});

When("I Add the pizza to the cart",() => {
  
  I.click("Add to cart");
     
 });
 Then("Navigate back to the main page and check if the '1' appears next to the cart icon",() => {
  
  I.click(main.elements.back_btn);
  I.wait(3);
  I.waitForElement(main.elements.cart_content_number);
  I.seeTextEquals('1',(main.elements.cart_content_number));
  
     
 });
 Then("Open the cart and check if the selected pizza with its price appears in the cart",() => {
  
 
  I.click(main.elements.cart_icon);
  I.waitForText('Ricci',3);
  I.see('Ricci');
  I.see('$9');
    
});

When("I Delete the pizza from the cart and check if it is disappeared",() => {
  I.waitForElement(main.elements.cart_item_delete_btn,3);
  I.click(main.elements.cart_item_delete_btn);
  I.dontSee('Ricci');
  I.dontSee('$9');
     
 });


Then("Navigate back to the main page",() => {
  I.click(main.elements.back_btn);
  
    
});

Then("I Click on the + button on the main page to create a custom pizza Add Salami, Mushroom and Ricci to the pizza",() => {
  
  I.waitForElement(main.elements.custom_pizza_btn,3);
  I.tap(main.elements.custom_pizza_btn);
  I.wait(2);
  I.click('Salami');
  I.click('Mushrooms');
  I.click('Ricci');
   
    
});

Then("I Check if the price of your custom pizza appears on the page",() => {
  
  I.wait(2);
  I.see('($11.5)');
  
    
});
Then("I Add this pizza to the cart",() => {
  
  I.wait(2);
  I.see('($11.5)');
  I.click('Add to cart');
  I.click(main.elements.back_btn);
  
    
});
When("I Check out the pizza",() => {
  
  I.waitForElement(main.elements.cart_content_number,5);
  I.click(main.elements.cart_content_number);
  I.waitForText('Checkout',3);
  I.click('Checkout');
  
    
});

Then("I Check if the Thank for your order appears on the page",() => {
  I.waitForElement(main.elements.thank_you,4);
  //I.see('Thank you for your order');
  
    
});

Then("Navigate back to the main page with Back to home button",() => {
  
  
  I.click('Back to home');
  
    
});


Then("I Open the cart",() => {
  
  I.waitForElement(main.elements.cart_icon);
  I.tap(main.elements.cart_icon);
  
});

Then("Open the Drinks menu",() => {
  
  I.waitForElement(main.elements.drinks_icon,3);
  I.tap(main.elements.drinks_icon);
  
});

When("Add a beer from the menu",() => {
  
  I.waitForElement(main.elements.add_beer_btn,3);
  I.tap(main.elements.add_beer_btn);
  
});

When("Go back to the cart",() => {
  
  
  I.tap(main.elements.back_btn);
  
});
Then("Check if the bear appears in the cart",() => {
  
  I.waitForText('Beer',3);
  
});

Then("Delete the beer and go back to the main page",() => {
  
  I.tap(main.elements.cart_item_delete_btn);
  I.wait(3);
  I.dontSee('Beer');
  I.click(main.elements.back_btn);
  I.waitForText('Nenno',3);
  
});
