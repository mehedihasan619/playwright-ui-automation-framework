export class ResetPasswordForm {
  constructor(page) {
    this.emailAddressField = page.getByPlaceholder('<placeholder>');
    this.submtButton = page.getByPlaceholder('<placeholder>');
    this.confirmationMessage = page.getByText('Email sent');
  }

  requestPasswordResetEmail = async emailAddress => {
    await this.installerEmailAddressField.fill(emailAddress);
    await this.submtButton.click();
  };
}
