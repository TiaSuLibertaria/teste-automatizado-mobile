class LoginScreen {
  get #address() {
    return $('id:input');
  }

  get #buttonContinue() {
    return $('id:bottom_button');
  }

  get #storeCredentials() {
    return $('id:login_site_creds');
  }

  get #username() {
    return $('android=new UiSelector().text("Username")');
  }

  get #password() {
    return $('android=new UiSelector().text("Password")');
  }

  get #typePassord() {
    return $('id:login_enter_password');
  }

  async setSiteAddress(url) {
    await this.#address.setValue(url);
  }

  async setButton() {
    await this.#buttonContinue.click();
  }

  async setStoreCredentials() {
    await this.#storeCredentials.click();
  }

  async login(username, password) {
    await this.#username.setValue(username);
    await this.#password.setValue(password);
    await this.#buttonContinue.click();
  }

  async getTypePassword() {
    await this.#typePassord.click();
  }

  async confirmPassword(password) {
    await this.#password.setValue(password);
    await this.#buttonContinue.click();
  }
}
module.exports = new LoginScreen();
