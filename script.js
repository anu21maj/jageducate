// script.js

document.getElementById('add-button').addEventListener('click', function() {
  // Create a new div element to contain the new form group
  var newDiv = document.createElement('div');
  newDiv.className = 'form-group';
  
  // Create a new label element
  var newLabel = document.createElement('label');
  newLabel.innerHTML = 'Additional Field:';
  
  // Create a new input element
  var newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.name = 'additionalField[]';
  newInput.required = true;
  
  // Append the label and input to the new div
  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  
  // Append the new div to the additional fields container
  document.getElementById('additional-fields').appendChild(newDiv);
});
