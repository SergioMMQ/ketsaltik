document.getElementById("form-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;
    
    if (nombre && email && mensaje) {
        alert("¡Gracias por tu mensaje, " + nombre + "! Nos pondremos en contacto contigo pronto.");
        document.getElementById("form-contacto").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});
