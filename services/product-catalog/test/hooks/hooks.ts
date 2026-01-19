import { Before, After, BeforeAll, AfterAll } from '@cucumber/cucumber';

BeforeAll(async function () {
  console.log('BeforeAll: Starting Cucumber tests');
});

AfterAll(async function () {
  console.log('AfterAll: All Cucumber tests completed');
});

Before(async function () {
  console.log('Before: Starting scenario');
});

After(async function () {
  console.log('After: Scenario completed');
});
