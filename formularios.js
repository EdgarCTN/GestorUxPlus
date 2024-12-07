// Simulación de datos de formularios realistas sobre UX
const formularios = [
    {
        id: 1,
        titulo: "Encuesta de Satisfacción del Usuario",
        preguntas: [
            "En una escala del 1 al 10, ¿cómo calificaría la facilidad de uso del sitio web?",
            "¿Encontró fácilmente la información que estaba buscando?",
            "¿Qué tan satisfecho está con el diseño visual de la aplicación?",
            "¿Hay alguna funcionalidad que considere confusa o difícil de usar?",
            "¿Recomendaría esta herramienta a un amigo o colega? ¿Por qué?"
        ]
    },
    {
        id: 2,
        titulo: "Feedback sobre Funcionalidades",
        preguntas: [
            "¿Qué tan útiles le parecen las funcionalidades actuales del sistema?",
            "¿Alguna funcionalidad ha superado sus expectativas? ¿Cuál?",
            "¿Hay alguna funcionalidad que considere innecesaria?",
            "¿Qué funcionalidad adicional le gustaría ver en la próxima versión?",
            "¿Experimentó algún problema técnico al utilizar la plataforma?"
        ]
    },
    {
        id: 3,
        titulo: "Evaluación de la Experiencia de Usuario",
        preguntas: [
            "¿El proceso de registro fue rápido y sencillo?",
            "¿Cómo describiría la velocidad de carga del sitio web o aplicación?",
            "¿Qué tan claro es el contenido presentado en las páginas?",
            "¿Se sintió frustrado en algún momento mientras navegaba? ¿Por qué?",
            "¿Qué cambios haría para mejorar su experiencia general con este producto?"
        ]
    }
];

// Función para mostrar los formularios y preguntas
function mostrarFormularios() {
    const contenedor = document.getElementById("resultados");
    contenedor.innerHTML = "";

    if (formularios.length === 0) {
        contenedor.innerHTML = "<p class='text-center text-muted'>No hay formularios disponibles.</p>";
        return;
    }

    formularios.forEach((formulario) => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-3";
        card.innerHTML = `
            <div class="card shadow">
                <div class="card-body">
                    <h5 class="card-title">${formulario.titulo}</h5>
                    <button class="btn btn-primary btn-sm" onclick="verFormulario(${formulario.id})">
                        Ver Preguntas
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

// Función para registrar auditoría al revisar un formulario
function registrarAuditoriaFormulario(idFormulario) {
    const timestamp = new Date().toLocaleString();
    const mensajeAuditoria = `Auditoría registrada: Revisión del formulario ID ${idFormulario} realizada el ${timestamp}.`;

    // Simulación del guardado en el arreglo de auditorías
    auditorias.push(mensajeAuditoria);

    // Mostrar mensaje en la consola
    console.log(mensajeAuditoria);

    // Mostrar mensaje temporal en el DOM por 5 segundos
    const logAuditoria = document.getElementById("logAuditoria");
    if (logAuditoria) {
        const mensajeElemento = document.createElement("p");
        mensajeElemento.textContent = mensajeAuditoria;
        logAuditoria.appendChild(mensajeElemento);

        // Eliminar el mensaje después de 5 segundos
        setTimeout(() => {
            logAuditoria.removeChild(mensajeElemento);
        }, 5000);
    }
}

// Función para mostrar las preguntas de un formulario en el modal y registrar la auditoría
function verFormulario(id) {
    const formulario = formularios.find((f) => f.id === id);
    const modalBody = document.getElementById("modalBody");
    const modal = new bootstrap.Modal(document.getElementById("modalDetalles"));

    if (formulario) {
        modalBody.innerHTML = `
            <h5>${formulario.titulo}</h5>
            <ul>
                ${formulario.preguntas.map((pregunta) => `<li>${pregunta}</li>`).join("")}
            </ul>
        `;
        modal.show();

        // Registrar auditoría al revisar el formulario
        registrarAuditoriaFormulario(formulario.id);
    }
}
