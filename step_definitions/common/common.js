const { I } = inject();

Then('the user sees the following items in the screen', async (table) => {
  const items = table.parse().hashes();

  const context = await I.getCurrentContext();
  for (const item of items) {
    pageObjects[context].validateScreenElements(item);
  }
});