Feature('login');

Scenario('Yanlış Kullanıcı Adı',  ({ I }) => {
    I.amOnPage('http://amazon.com');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','DDDDD');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'cannot find')]");
});
