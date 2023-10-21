const kayitkabul = require("../pages/kayitkabul");

Feature('HastaKabul');

Before((I)=>{
    I.login();
});

Scenario('Hasta Kabul Senaryosu',  async ({ I, girisPagePage, kayitkabulPage }) => {

    await girisPagePage.mesajKutusunuKapat();
    girisPagePage.kayıtKabulEkranAc();
    kayitkabulPage.hastaAra();
    kayitkabulPage.hastaKayit();
    kayitkabulPage.kabulAlma();
    kayitkabulPage.kayitetme();

    //Kabul Kontrol
    I.waitForElement(kayitkabulPage.fields.kabulKontrolAlani);
    I.seeElement(kayitkabulPage.fields.kabulKontrolAlani);

});
