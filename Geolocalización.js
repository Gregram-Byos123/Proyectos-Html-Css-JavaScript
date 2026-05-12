async function consultarUbicacion() {
    const displayRes = document.getElementById('resultado');
    displayRes.innerText = "Buscando...";

    try {
        // Aquí utilicé la API pública de IpInfo.io
        const respuesta = await fetch('https://ipinfo.io/json');
        
        if (!respuesta.ok) throw new Error("Error de API");

        const datos = await respuesta.json();

        document.getElementById('ciudad').innerText = datos.city || "N/A";
        document.getElementById('region').innerText = datos.region || "N/A";
        document.getElementById('pais').innerText = datos.country || "N/A";
        document.getElementById('coords').innerText = datos.loc || "N/A";

        displayRes.innerText = "¡Ubicación cargada con éxito!";
        displayRes.style.color = "#28a745";

    } catch (error) {
        console.error("Error:", error);
        displayRes.innerText = "Error al obtener datos.";
        displayRes.style.color = "#dc3545";
    }
}