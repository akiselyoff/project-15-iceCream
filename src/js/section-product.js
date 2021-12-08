(() => {
  const refs = {
    product: document.querySelectorAll('[data-product]'),
  };

  [...refs.product].forEach(item => {
    const openProductBtn = item.querySelector('[data-product-open]');
    const closeProductBtn = item.querySelector('[data-product-close]');

    openProductBtn.addEventListener('click', e => {
      e.preventDefault();
      toggleProduct(item);
    });

    closeProductBtn.addEventListener('click', e => {
      e.preventDefault();
      toggleProduct(item);
    });
  });

  function toggleProduct(item) {
    item.classList.toggle('is-active');
  }
})();
