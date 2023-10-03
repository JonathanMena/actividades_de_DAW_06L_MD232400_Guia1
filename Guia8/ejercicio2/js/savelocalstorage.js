if(typeof(localStorage) == "undefined") {
   document.getElementById("notCompatibleMsg").style.display = 'block';
  }
  else {
   document.getElementById("isCompatibleMsg").style.display = 'block';
  }
  var storedTextContainer = document.getElementById("webStorageStoredText");
  var storedText = localStorage.getItem('webStorageTestInput');
  var inputBox = document.getElementById("webStorageInput");
  var saveBtn = document.getElementById("webStorageSaveBtn");
  var clearBtn = document.getElementById("clearWebStorage");
  
  if(storedText != null){
   storedTextContainer.innerHTML = "<strong>Dato cargado desde almacenamiento local:</strong> " + storedText;
   inputBox.value = storedText;
  }
  saveBtn.onclick = function(){
   var valueToSave =inputBox.value.replace(/<\/?[^>]+>/gi, '');
   localStorage.setItem('webStorageTestInput',valueToSave);
   storedTextContainer.innerHTML = "Se ha almacenado correctamente '" + valueToSave + ".' Actualice la página para que observe que el dato almacenadoes mostrado en el campo de formulario.";
  }
  clearBtn.onclick = function(){
   if(storedText != null){
   localStorage.clear();
   inputBox.value = "";
   storedTextContainer.innerHTML = "Almacenamiento local liberado.";
   }
}