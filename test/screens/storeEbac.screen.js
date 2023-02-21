class StoreEbac {
  get #box() {
    return $('//android.widget.FrameLayout[@content-desc="Products"]');
  }
  get #addMore() {
    return $('~Add products');
  }

  get #simpleProduct() {
    return $('android=new UiSelector().text("Simple physical product")');
  }

  async setbox() {
    await this.#box.click();
  }

  async setAddMore() {
    await this.#addMore.click();
  }

  async setSimpleProduct() {
    await this.#simpleProduct.click();
  }
}

module.exports = new StoreEbac();
