class homeScreen {
  get #skipButton() {
    return $('id:button_skip');
  }

  get #getStoreAddress() {
    return $('id:button_login_store');
  }

  async getSkipButton() {
    await this.#skipButton.click();
  }

  async setStoreAddress() {
    this.#getStoreAddress.click();
  }
}

module.exports = new homeScreen();
