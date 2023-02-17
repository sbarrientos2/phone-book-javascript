// Get the input elements, the button and the contact list element
const nameInput = document.getElementById('name-input');
const numberInput = document.getElementById('phone-input');
const addButton = document.getElementById('add-button');
const contactList = document.getElementById('contact-list');
const errorContainer = document.getElementById('error-container');

// Add a submit event listener to the form
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  addContact();
});

// Function to add contact 
function addContact() {
  // Check that the name is not empty
  const name = nameInput.value.trim();
  if (name === '') {
    showError('Name is required');
    return;
  }

  // Check that the number is not empty
  const number = numberInput.value.trim();
  if (number === '') {
    showError('Phone number is required');
    return;
  }

  // Create a new contact item
  const contactItem = createContact(name, number);
  // Add new contact to the list
  contactList.appendChild(contactItem);

  // Clear the input fields and error message
  nameInput.value = '';
  numberInput.value = '';
  clearError();
}

// Function that creates the new contact 
function createContact(name, number) {    
  const contactItem = document.createElement("li");
  contactItem.textContent = name + " - " + number;

  const deleteButton = createDeleteButton();

  deleteButton.addEventListener("click", function() {
    contactList.removeChild(contactItem);
  });

  contactItem.appendChild(deleteButton);
  return contactItem;
}

// Function that creates a new delete button
function createDeleteButton() {

  // Create new button
  const deleteButton = document.createElement("button");

  // Give the button text with textContent and title
  deleteButton.textContent = "Delete";
  deleteButton.title = 'Delete Contact';
  deleteButton.id = 'delete-button';

  return deleteButton;
} 

// Function to show an error message
function showError(message) {
  errorContainer.textContent = message;
}

// Function to clear the error message
function clearError() {
  errorContainer.textContent = '';
}
