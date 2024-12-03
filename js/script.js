document.getElementById('form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevenir recarga de la página


    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const solicitud = document.getElementById('solicitud').value;


    const data = {
      nombre: nombre,
      correo: correo,
      solicitud: solicitud
    };

    try {

      const response = await fetch('', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        const result = await response.json();
        alert('Formulario enviado correctamente: ' + JSON.stringify(result));
      } else {
        alert('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al enviar el formulario');
    }
  });