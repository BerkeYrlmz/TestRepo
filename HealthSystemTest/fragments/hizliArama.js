const { I } = inject();

module.exports = {

  fields:{
    hastaAramaAlani: "//input[@id='edtPatientSearch']"
  },
  
  hastaArama: function(){

    I.switchTo('[src*="../PatientAdmission/ObjectViewers/PatientAdmission/patientadmissionviewer.htm"]');
    I.waitForElement("//input[@id='edtPatientSearch']");
    I.fillField(this.fields.hastaAramaAlani,I.generateTCKimlikNo());
    I.pressKey('Enter')
  },
}
