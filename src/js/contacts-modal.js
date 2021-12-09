(() => {
    const refs = {
      openModalBtn: document.querySelector('[contacts-data-modal-open]'),
      closeModalBtn: document.querySelector('[contacts-data-modal-close]'),
      modal: document.querySelector('[contacts-data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();