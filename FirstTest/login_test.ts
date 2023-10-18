Feature('login');

Scenario('Yanlış Kullanıcı Adı @testcase1',  ({ I }) => {
    I.amOnPage('http://amazon.com');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','DDDDD');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.seeElement("//*[contains(text(),'cannot find')]");
});

Scenario('Dogru Kullanıcı Adı Yanlış Şifre @testcase2',  ({ I }) => {
    I.amOnPage('http://amazon.com');
    I.waitForElement('//div[@id="nav-signin-tooltip"]');
    I.click('//div[@id="nav-signin-tooltip"]');
    I.fillField('//input[@id="ap_email"]','berkeyorulmaz@hotmail.com');
    I.waitForElement('//input[@id="continue"]');
    I.click('//input[@id="continue"]');
    I.fillField('//input[@id="ap_password"]','DDDDD');
    I.waitForElement('//input[@id="signInSubmit"]');
    I.click('//input[@id="signInSubmit"]');
    I.seeElement("//*[contains(text(),'There was a problem')]");
});