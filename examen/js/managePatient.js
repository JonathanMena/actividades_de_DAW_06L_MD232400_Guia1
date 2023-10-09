// managePatient.js
function displayPatient() {
    var documentNumber = document.getElementById('documentNumber').value;
    var patient = JSON.parse(localStorage.getItem(documentNumber));
  
    if (patient) {
      var info = '';
      for (var key in patient) {
        info += key + ': ' + patient[key] + '<br>';
      }
      document.getElementById('patientInfo').innerHTML = info;
    } else {
      alert('No se encontró al paciente.');
    }
  }
  
  function deletePatient() {
    var documentNumber = document.getElementById('documentNumber').value;
    
    if (localStorage.getItem(documentNumber)) {
      localStorage.removeItem(documentNumber);
      alert('Paciente eliminado.');
      document.getElementById('patientInfo').innerHTML = '';
    } else {
      alert('No se encontró al paciente.');
    }
  }
  