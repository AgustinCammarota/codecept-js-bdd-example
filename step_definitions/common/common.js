const { I } = inject();

Then('the user sees the following items in the screen', async (table) => {
  const items = table.parse().hashes();

  const context = await I.getCurrentContext();
  for (const item of items) {
    pageObjects[context].validateScreenElements(item);
  }
});

Then('the {string} screen visual is analysed', async (screen) => {
  await I.saveScreenshot(`${screen}_Screenshot_Image.png`);
  await I.seeVisualDiff(`${screen}_Screenshot_Image.png`, {tolerance: 2, prepareBaseImage: false});
});