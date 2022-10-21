Feature: Nenno's Pizza Basic Operations
  In order to add Pizza
  As a customer
  I want to be able to interact with menus

Background:
  Given I am at the landing page

Scenario: Cart Operations    
  Then I check if the Nenno's Pizza title appears on the main page
  Then I Check if the title contents price of the Ricci pizza appears on the main page
  When I Select Ricci pizza
  Then I Check if the name of the selected pizza / picture of the selected pizza and the Ingredients title appears on the page
  Then I Check if the Mozzarella and Ricci ingredients are checked in the list
  When I Add the pizza to the cart
  Then Navigate back to the main page and check if the '1' appears next to the cart icon
  Then Open the cart and check if the selected pizza with its price appears in the cart
  When I Delete the pizza from the cart and check if it is disappeared
  Then Navigate back to the main page

Scenario: Custom Pizza
  Then I Click on the + button on the main page to create a custom pizza Add Salami, Mushroom and Ricci to the pizza
  Then I Check if the price of your custom pizza appears on the page
  Then I Add this pizza to the cart
  When I Check out the pizza
  Then I Check if the Thank for your order appears on the page
  Then Navigate back to the main page with Back to home button  
  
Scenario: Drinks
  Then I Open the cart
  Then Open the Drinks menu
  When Add a beer from the menu
  When Go back to the cart
  Then Check if the bear appears in the cart
  Then Delete the beer and go back to the main page 