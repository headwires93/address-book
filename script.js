document.addEventListener("DOMContentLoaded", function() { 

/*Pop Up*/

const modalTrigger = document.querySelector('.trigger_button');
const modalCloseTrigger = document.querySelector('.popup-modal__close');
const bodyBlackout = document.querySelector('.body-blackout');
const popupModal = document.querySelector('.popup-modal');

modalTrigger.addEventListener('click', () => {
    popupModal.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')
    
    popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
       popupModal.classList.remove('is--visible')
       bodyBlackout.classList.remove('is-blacked-out')
    })
  })




/*Contact Constructor*/
const formSubmit = document.querySelector("#submitbtn");
const formName = document.querySelector("#name input");
const formEmail = document.querySelector("#email input");
const formPhone = document.querySelector("#phone input");
const formGroup = document.querySelector("#group input");
const book = document.querySelector(".book_body");



function Contact(name, email, phone, group) {
  this.name = name;
  this.email = email;
  this.phone = phone;
  this.group = group;
}

function addContact() {
  const name = formName.value;
  const email = formEmail.value;
  const phone = formPhone.value;
  const group = formGroup.value;
  newContact = new Contact(name, email, phone, group);
  addToBook(newContact);
  clearForm();
  popupModal.classList.remove('is--visible');
  bodyBlackout.classList.remove('is-blacked-out');
}

function addToBook(contactObj) {
  var node = document.createElement("DIV"); 
  node.classList.add("entry");
  node.innerHTML = `<div class="name_field">
    ${contactObj.name}
  </div> 
  <div class="email_field">
    <a href="mailto:${contactObj.email}">${contactObj.email}</a>
  </div> 
  <div>
  ${contactObj.phone}
  </div> 
  <div>
  ${contactObj.group}
  </div>` 
  book.appendChild(node);
}

function clearForm() {
  formName.value = "";
  formEmail.value = "";
  formPhone.value = "";
  formGroup.value = "";
}

formSubmit.addEventListener('click', addContact)

})

