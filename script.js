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

})