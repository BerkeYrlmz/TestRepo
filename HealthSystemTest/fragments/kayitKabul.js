const { I } = inject();

module.exports = {

  fields:{
    hastaBulunamadiUyarisi: '//span[contains(text(),"Hasta bulunamadı.")]',
    adresUyarisi: '//span[contains(text(),"Belirtilen adresi kullanmak istiyor musunuz?")]',
    kurum: '#cmbInstitutionID',
    telefon: '#edtCellPhone',
    calismaDurumu: '#cmbWorkingStatus',
  },
  selects:{
    bina: '#cmbBuildingID',
    birim: '#cmbSentUnitID',
    birimSecim: '//*[contains(text(),"ACİL YEŞİL ALAN")]',
    doktor: '#cmbSentDoctorID',
  },doktorSecim: '//*[contains(text(),"Mk Order OTOMASYON")]',
  buttons:{
    evetBtn: '//button[text()="Evet"]'
  },

  hastaolustur: function(){

  I.waitForElement(this.fields.hastaBulunamadiUyarisi);
  I.waitForElement(this.buttons.evetBtn);
  I.click(this.buttons.evetBtn);

  I.waitForElement(this.fields.adresUyarisi);
  I.click(this.buttons.evetBtn);

  I.waitForElement(this.fields.kurum);
  I.fillField(this.fields.kurum);

  I.waitForElement(this.fields.telefon);
  I.fillField(this.fields.telefon,'1111111');

  I.waitForElement(this.fields.calismaDurumu);
  I.click(this.fields.calismaDurumu);
  I.pressKey('Enter');
  },

  kabulOlustur: function(){

    I.waitForElement(this.selects.bina);
    I.fillField(this.selects.bina,'MHC');
    I.pressKey('Enter');

    I.waitForElement(this.selects.birim);
    I.click(this.selects.birim);
    I.fillField(this.selects.birim,'ACİL YEŞİL ALAN');
    I.click(this.selects.birimSecim);

    I.waitForElement(this.selects.doktor);
    I.click(this.selects.doktor);
    I.fillField(this.selects.doktor,'Mk Order');
    I.click(this.selects.doktorSecim);
  },
  
}
