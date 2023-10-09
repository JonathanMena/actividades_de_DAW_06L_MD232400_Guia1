// storePatient.js
document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    var patient = {
      name: document.getElementById('name').value,
      dob: document.getElementById('dob').value,
      address: document.getElementById('address').value,
      documentType: document.getElementById('documentType').value,
      documentNumber: document.getElementById('documentNumber').value,
      phone: document.getElementById('phone').value,
      reason: document.getElementById('reason').value
    };
  
    localStorage.setItem(patient.documentNumber, JSON.stringify(patient));
  });
  