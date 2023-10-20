const { I } = inject();

class girisPage {
  constructor() {
    //insert your locators
    // this.button = '#button'
  }
  // insert your methods here
}

// For inheritance
module.exports = {

  fields:{},
  selects:{},
  buttons:{
    mesajKutuKapatBtn : "//div[@class='x-tool x-tool-close']",
    kayıtKabulBtn : "//table[@id='patientAdmissionMainBTN']"
  },

  mesajKutusunuKapat : async function() {
    
      I.wait(6);
      I.switchTo("//iframe[@id='bafExplorer']");
      let mesajKutusu = await I.grabNumberOfVisibleElements(this.buttons.mesajKutuKapatBtn);

      if(mesajKutusu !== 0) {
        I.click(this.buttons.mesajKutuKapatBtn);
      }

    },
    
  kayıtKabulEkranAc : function() {

      I.waitForElement(this.buttons.kayıtKabulBtn);
      I.click(this.buttons.kayıtKabulBtn);
    }

}
export default  girisPagePage;