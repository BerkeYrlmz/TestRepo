const generateTCKN = require('tcidgen');

// in this file you can append custom step methods to 'I' object
module.exports = function() {

  let paremeters = require ('./Paremeters/hastane1.json');

  return actor({

    fields:{

      kullaniciAdi : '//input[@id="edtNickName"]',
      sifre : '//input[@id="edtPassword"]'
    },
    buttons:{

      girisYapBtn: '//div[@id"loginPanel"]//div[@class="login_button"]'

    },

    getEnvironmentParemeters : function(key) {

      return paremeters[key];

    },
  
    login : function(){
      this.amOnPage(this.getEnvironmentParemeters("url"));
      this.waitForElement(this.fields.kullaniciAdi);
      this.waitForElement(this.fields.sifre);
      this.fillField(this.fields.kullaniciAdi,this.getEnvironmentParemeters("kullaniciAdi"));
      this.fillField(this.fields.sifre,this.getEnvironmentParemeters("sifre"));
      this.waitForElement(this.buttons.girisYapBtn);
      this.click(this.buttons.girisYapBtn);

    },

    generateTCKimlikNo : function() {
      const generateTCKN= require('tcidgen');
      const tckn = generateTCKN();
      return tckn;

    }


  });
}
