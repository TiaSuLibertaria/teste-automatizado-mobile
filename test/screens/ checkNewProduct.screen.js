class checkNewProduct {
  get #navigation() {
    return $('~Navigate up');
  }

  get #search() {
    return $('id:menu_search');
  }

  get #searchProduct() {
    return $('id:search_src_text');
  }

  get #confirmProduct() {
    return $('id:linearLayout');
  }

  async navigationUp() {
    await this.#navigation.click();
  }
  async searchMenu() {
    await this.#search.click();
  }

  async setSearchProduct(text) {
    await this.#searchProduct.setValue(text);
  }

  async confirmProduct() {
    await this.#confirmProduct.click();
  }
}

module.exports = new checkNewProduct();
