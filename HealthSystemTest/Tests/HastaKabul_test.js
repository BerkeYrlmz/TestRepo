Feature('HastaKabul');

Before((I)=>{
    I.login();
});

Scenario('test something',  async ({ I, girisPagePage }) => {

    await girisPagePage.mesajKutusunuKapat();
    girisPagePage.kayıtKabulEkranAc();

    //hasta Arama

    I.switchTo('[src*="../PatientAdmission/ObjectViewers/PatientAdmission/patientadmissionviewer.htm"]');
    I.waitForElement("//input[@id='edtPatientSearch']");
    I.fillField("//input[@id='edtPatientSearch']",I.generateTCKimlikNo());
    I.pressKey('Enter');

    I.waitForElement('//span[contains(text(),"Hasta bulunamadı.")]');
    I.waitForElement('//button[text()="Evet"]');
    I.click('//button[text()="Evet"]');

    I.waitForElement('//span[contains(text(),"Belirtilen adresi kullanmak istiyor musunuz?")]');
    I.click('//button[text()="Evet"]');

    I.waitForElement('#cmbInstitutionID');
    I.fillField('#cmbInstitutionID','1');

    I.waitForElement('#edtCellPhone');
    I.fillField('#edtCellPhone','1111111');

    I.waitForElement('#cmbWorkingStatus');
    I.click('@cmbWorkingStatus');
    I.pressKey('Enter');

    //Kabul Alma

    I.waitForElement('#cmbBuildingID');
    I.fillField('#cmbBuildingID','MERKEZ');
    I.pressKey('Enter');

    I.waitForElement('#cmbSentUnitID');
    I.click('#cmbSentUnitID');
    I.fillField('cmbSentUnitID','ACİL YEŞİL ALAN');
    I.pressKey('Enter');

    I.waitForElement('#cmbSentDoctorID');
    I.click('cmbSentDoctorID');
    I.fillField('cmbSentDoctorID','Mk')
    I.pressKey('Enter');

    //Kaydetme İşlemi

    I.waitForElement('smallSaveButton');
    I.click('smallSaveButton');



});
