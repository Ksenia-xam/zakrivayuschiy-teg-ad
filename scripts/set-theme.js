function changeTheme(theme) {
  document.documentElement.className = '';
  document.documentElement.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);
}

(function initTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    changeTheme(theme);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const root = document.documentElement;
  const themeButtons = document.querySelectorAll('.theme-menu__button');

  function setDisabled(theme) {
    themeButtons.forEach((item) => {
      if (item.getAttribute('data-theme') === theme) {
        item.setAttribute('disabled', true);
      } else {
        item.removeAttribute('disabled');
      }
    });
  }

  // тема
  if (root.classList.contains('theme-light')) {
    setDisabled('light');
  } else if (root.classList.contains('theme-dark')) {
    setDisabled('dark');
  } else {
    setDisabled('auto');
  }

  themeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const theme = button.getAttribute('data-theme');
      changeTheme(theme);
      setDisabled(theme);
    });
  });

  // --- МОДАЛКА (ПРОСТО ДОБАВИЛ СЮДА) ---
  const modal = document.querySelector('#modal');
  const saveButton = document.querySelector('.save__button');
  const closeButton = document.querySelector('.popup__close-btn');

  if (saveButton && modal) {
    saveButton.addEventListener('click', () => {
      modal.showModal();
    });
  }

  if (closeButton && modal) {
    closeButton.addEventListener('click', () => {
      modal.close();
    });
  }
});

document.querySelector('button').addEventListener('click', function(event){
  event.preventDefault();
});
