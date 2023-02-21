class AddProduct {
  get #titleEnter() {
    return $('android=new UiSelector().text("Enter Product Title")');
  }

  get #ProductTitle() {
    return $('id:editText');
  }

  get #DescriptionEnter() {
    return $('android=new UiSelector().text("Describe your product")');
  }

  get #visualEditor() {
    return $('id:visualEditor');
  }

  get #buttonBack() {
    return $('~Navigate up');
  }

  get #buttonPrice() {
    return $('android=new UiSelector().text("Add price")');
  }

  get #regularPrice() {
    return $('android=new UiSelector().text("Regular price")');
  }

  get #enterPrice() {
    return $('id:edit_text');
  }

  get #salePrice() {
    return $('android=new UiSelector().text("Sale price")');
  }

  get #publish() {
    return $('id:menu_publish');
  }

  async setProduct(text) {
    await this.#titleEnter.click();
    await this.#ProductTitle.setValue(text);
  }

  async Desccription() {
    await this.#DescriptionEnter.click();
  }

  async setVisualEditor(text) {
    await this.#visualEditor.setValue(text);
    await this.#buttonBack.click();
  }

  async buttonPrice() {
    await this.#buttonPrice.click();
  }

  async setAddPrice(price1, price2) {
    await this.#regularPrice.click();
    await this.#enterPrice.setValue(price1);
    await this.#salePrice.click();
    await this.#enterPrice.setValue(price2);
    await this.#buttonBack.click();
  }

  async menuPublish() {
    await this.#publish.click();
  }
}

module.exports = new AddProduct();
