const assert = require("assert");

describe('Login Sauce Page', () => {
    it('Should successfully login into Sauce Demo page', async () => {
        await browser.url(`https://www.saucedemo.com/`);
		
		 const inputElemUserName = await $('#user-name');
         await inputElemUserName.setValue('performance_glitch_user');
      
	  	 const inputElemUserPass = await $('#password');
         await inputElemUserPass.setValue('secret_sauce');
		 
	     const button = await $('#login-button'); 
		 await button.click();
		 
		 const productLabel = await $('.product_label');
	 
	
	   
		  const actualLabelResult =await productLabel.getText();
		  await assert.strictEqual(actualLabelResult,'Products');
		
	    await browser.deleteSession();
    });
});