const {I} = inject();

When('the user is on dashboard page', () => {
  I.seeInCurrentUrl('login');
});