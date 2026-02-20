import {test, expect} from '@playwright/test';

test('Verify Vercel App Home Page', async ({page}) => {
  // Navigate to the Vercel app home page
  await page.goto('https://dd-demo-tau.vercel.app/web_elements.html');
  const textInputField = await page.locator('#textInputField');
  await textInputField.scrollIntoViewIfNeeded(); //scroll to the text input field if not visible upfront
  await page.waitForTimeout(1000);
  // Verify the text input field is visible
  await expect(textInputField).toBeVisible();
  await textInputField.fill('Playwright Test'); //Enter the data into the text input field
  await page.waitForTimeout(1000);
  const actualTextInputMsg = await page.locator('#textInputMsg').textContent(); //Get the text content of the element that displays the message after entering text
  console.log('Actual Text Input Message:', actualTextInputMsg); //Log the actual text input message to the console for debugging purposes
  await expect(actualTextInputMsg).toContain('Playwright Test'); //Assert that the actual text input message contains the expected text 'Playwright Test'  
  await page.screenshot({path: 'screenshots/success-homepage.png', fullPage: false}); //Take a screenshot of the home page and save it to the specified path
  await page.close();
})