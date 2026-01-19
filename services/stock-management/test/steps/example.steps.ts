import { Given, When, Then } from '@cucumber/cucumber';

Given('I have a setup', async function () {
  console.log('Setup completed');
});

When('I perform an action', async function () {
  console.log('Action performed');
});

Then('I expect a result', async function () {
  console.log('Result verified');
});
