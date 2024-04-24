export class ResetPasswordForm {
  constructor(page) {
    this.emailAddressField = page.getByPlaceholder('<placeholder>');
    this.submtButton = page.page.getByPlaceholder('<placeholder>');
  }

  requestPasswordResetEmail = async emailAddress => {
    await this.installerEmailAddressField.fill(emailAddress);
    await this.submtButton.click();
  };
}
