const { I } = inject();

module.exports = {
  elements : {
		custom_pizza_btn: '//*[@content-desc="add_custom_pizza_btn"]',
		//or xpath nameField: '//*[@id="hello-input"]'
		submitButton: '//button[@type="submit"]',
    margherita_title : '//*[@content-desc="margherita_pizza_title"]',
    margherita_title_price : '//*[@content-desc="margherita_pizza_price"]',
    page_title : '//*[@content-desc="page_title"]',
    ricci_title : '//*[@content-desc="ricci_pizza_title"]',
    ricci_title_price : '//*[@content-desc="ricci_pizza_price"]',
    cart_icon : '//*[@content-desc="cart_icon"]',
    drinks_icon : '//*[@content-desc="Drinks"]',
    checkout_btn : '//*[@content-desc="checkout_btn"]/android.view.ViewGroup/android.widget.TextView[1]',
    total_checkout: '//*[@content-desc="checkout_btn"]/android.view.ViewGroup/android.widget.TextView[2]',
    firstIngchkBox: '(//*[contains(@class, "CheckBox")])[1]',
    third_ingredient:'(//*[contains(@class, "CheckBox")])[3]', 
    lastIngchkBox: '(//*[contains(@class, "CheckBox")])[4]',
    fifth_ingredient: '(//*[contains(@class, "CheckBox")])[5]',
    pizza_image: '//android.widget.ImageView[@content-desc="pizza_image"]',
    back_btn: '//*[@content-desc="back_btn"]',
    cart_content_number: '//*[@content-desc="cart_content_number"]',
    cart_item_delete_btn: '//*[@content-desc="cart_item_1_delete_btn"]',
    cart_item_delete : '//*[id="deleteBtn"]',
    thank_you : '//*[@content-desc="thank_you_text"]',
    add_beer_btn: '//*[@content-desc="add_beer_btn"]'
    
	},
  // insert your locators and methods here
}
