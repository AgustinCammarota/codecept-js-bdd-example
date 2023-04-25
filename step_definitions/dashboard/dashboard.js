const {I} = inject();

When('the user is on dashboard page', () => {
  I.seeInCurrentUrl('login');
});

And('the user save your credentials', () => {

});

But('the user dont remember your credentials', () => {

});