const CheckNewProductScreen = require('../screens/ checkNewProduct.screen.js');
const addProductScreen = require('../screens/addProduct.screen.js');
const loginScreen = require('../screens/login.screen.js');
const pageScreen = require('../screens/page.screen.js');
const storeEbacScreen = require('../screens/storeEbac.screen.js');

const sleep = async (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

let storeUrl = 'http://lojaebac.ebaconline.art.br';
let username = 'gerente';
let password = 'GD*peToHNJ1#c$sgk08EaYJQ';
let text = 'Agasalho gyn abdo';
let text2 = 'Agasalho gin jhon';
let price1 = '450';
let price2 = '120';

describe('Should access product', () => {
  it('Should test product registration flow', async () => {
    await pageScreen.getSkipButton();
    await pageScreen.setStoreAddress();
    await loginScreen.setSiteAddress(storeUrl);
    await loginScreen.setButton();
    await loginScreen.setStoreCredentials();
    await loginScreen.login(username, password);
    await loginScreen.getTypePassword();
    await loginScreen.confirmPassword(password);
    await storeEbacScreen.setbox();
    await storeEbacScreen.setAddMore();
    await storeEbacScreen.setSimpleProduct();
    await addProductScreen.setProduct(text);
    await addProductScreen.Desccription();
    await addProductScreen.setVisualEditor(text2);
    await addProductScreen.buttonPrice();
    await addProductScreen.setAddPrice(price1, price2);
    await addProductScreen.menuPublish();
    await CheckNewProductScreen.navigationUp();
    await CheckNewProductScreen.searchMenu();
    await CheckNewProductScreen.setSearchProduct(text);

    expect(await CheckNewProductScreen.confirmProduct()).toBeClickable();
  });
});
