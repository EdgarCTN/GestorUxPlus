// Datos simulados
document.addEventListener("DOMContentLoaded", function () {
    const rol = localStorage.getItem("rol");
    if (!rol) {
      // Si no hay rol, redirigir al login
      window.location.href = "login.html";
    }
  });
  
  const objetivos = [
    {
        id: 1,
        titulo: "Optimizar la Productividad del Usuario",
        descripcion: "Identificar y eliminar obstáculos en los flujos de trabajo del sistema para garantizar que los usuarios puedan completar tareas clave de manera más rápida y eficiente."
    },
    {
        id: 2,
        titulo: "Reducir el Abandono de la Plataforma",
        descripcion: "Analizar los puntos críticos donde los usuarios abandonan la experiencia, mejorando la navegación, tiempos de carga y claridad de las funcionalidades."
    },
    {
        id: 3,
        titulo: "Mejorar la Satisfacción del Cliente",
        descripcion: "Implementar cambios en base al feedback directo de los usuarios, optimizando la interfaz y personalizando las interacciones para superar sus expectativas."
    },
    {
        id: 4,
        titulo: "Aumentar la Accesibilidad",
        descripcion: "Asegurar que la plataforma sea inclusiva para todos los usuarios, incluyendo aquellos con discapacidades, mediante el diseño de interfaces accesibles y el cumplimiento de estándares WCAG."
    },
    {
        id: 5,
        titulo: "Fortalecer la Retención de Usuarios",
        descripcion: "Desarrollar mejoras continuas que fomenten la fidelización, como recordatorios personalizados, tutoriales interactivos y soporte proactivo."
    }
];

  
// Función para mostrar objetivos con descripciones resumidas
function mostrarObjetivos() {
    const resultados = document.getElementById("resultados");
    resultados.innerHTML = "";
  
    if (objetivos.length === 0) {
      resultados.innerHTML = `<div class="col-12 text-center text-danger">No hay objetivos disponibles.</div>`;
      return;
    }
  
    objetivos.forEach(objetivo => {
      const resumen = objetivo.descripcion.length > 100 
        ? objetivo.descripcion.slice(0, 100) + "..." 
        : objetivo.descripcion;
  
      resultados.innerHTML += `
        <div class="col-md-4">
          <div class="card border-primary">
            <div class="card-body">
              <h5 class="card-title text-primary">${objetivo.titulo}</h5>
              <p class="card-text">${resumen}</p>
              <button class="btn btn-primary" onclick="verDetalles(${objetivo.id})">Ver Detalles</button>
            </div>
          </div>
        </div>
      `;
    });
  }
  
  // Función para mostrar los detalles del objetivo en el modal
  function verDetalles(id) {
    const objetivo = objetivos.find(obj => obj.id === id);
    const modalBody = document.getElementById("modalBody");
  
    if (objetivo) {
      modalBody.innerHTML = `
        <h5>${objetivo.titulo}</h5>
        <p>${objetivo.descripcion}</p>
      `;
      registrarConsulta(objetivo.id);
      new bootstrap.Modal(document.getElementById("modalDetalles")).show();
    }
  }  
  
// Arreglo para almacenar los mensajes de auditoría
const auditorias = [];

// Función para registrar la consulta (auditoría simulada)
function registrarConsulta(idObjetivo) {
  const timestamp = new Date().toLocaleString();
  const mensajeAuditoria = `Auditoría registrada: Consulta para el objetivo ID ${idObjetivo} realizada el ${timestamp}.`;

  // Simulación del guardado en la estructura
  auditorias.push(mensajeAuditoria);

  // Mensaje en la consola
  console.log(mensajeAuditoria);

  // Mostrar mensaje en el DOM por 5 segundos
  const logAuditoria = document.getElementById("logAuditoria");
  if (logAuditoria) {
    // Crear un elemento temporal para el mensaje
    const mensajeElemento = document.createElement("p");
    mensajeElemento.textContent = mensajeAuditoria;
    logAuditoria.appendChild(mensajeElemento);

    // Eliminar el mensaje después de 5 segundos
    setTimeout(() => {
      logAuditoria.removeChild(mensajeElemento);
    }, 5000);
  }
}
