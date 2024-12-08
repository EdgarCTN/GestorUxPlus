const InformesApp = (() => {
    // Datos de los informes
    const informesDetalles = {
        "Informe de patrones de uso - Enero 2024": {
            estadisticas: {
                usuariosActivos: "2,500",
                tiempoSesion: "14 minutos",
                interacciones: "9,000"
            },
            comportamientos: {
                funcionalidad: "Reporte de Errores",
                tasaAbandono: "10%",
                horasPico: "16:00 - 19:00"
            }
        },
        "Informe de mejora de funcionalidades - Febrero 2024": {
            estadisticas: {
                usuariosActivos: "2,800",
                tiempoSesion: "18 minutos",
                interacciones: "10,200"
            },
            comportamientos: {
                funcionalidad: "Gestión de Tareas",
                tasaAbandono: "8%",
                horasPico: "14:00 - 17:00"
            }
        },
        "Análisis de comportamiento de usuarios - Marzo 2024": {
            estadisticas: {
                usuariosActivos: "3,000",
                tiempoSesion: "20 minutos",
                interacciones: "12,500"
            },
            comportamientos: {
                funcionalidad: "Búsqueda Avanzada",
                tasaAbandono: "5%",
                horasPico: "18:00 - 21:00"
            }
        }
    };

    // Mostrar informes disponibles
    function mostrarInformes() {
        const resultados = document.getElementById("resultados");
        resultados.innerHTML = `
            <div class="text-center">
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Cargando...</span>
                </div>
                <p class="mt-3 text-muted">Cargando informes de análisis, por favor espere...</p>
            </div>
        `;

        setTimeout(() => {
            resultados.innerHTML = Object.keys(informesDetalles).map((informe, index) => `
                <div class="col-md-4 mb-4">
                    <div class="card border-info">
                        <div class="card-body">
                            <h5 class="card-title text-info">${informe}</h5>
                            <p class="card-text">Haga clic para ver los detalles completos del informe.</p>
                            <button class="btn btn-primary" onclick="InformesApp.verDetalles('${informe}')">Ver Detalles</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }, 1000);
    }

    // Mostrar detalles de un informe
    function verDetalles(informe) {
        const detalles = informesDetalles[informe];
        const resultados = document.getElementById("resultados");

        if (!detalles) {
            resultados.innerHTML = `<p class="text-danger">No se encontraron detalles para el informe seleccionado.</p>`;
            return;
        }
        registrarAuditoriaInforme(informe);


        // Simular la carga de estadísticas
        resultados.innerHTML = `
            <div class="text-center">
                <div class="spinner-border text-secondary" role="status">
                    <span class="visually-hidden">Cargando detalles...</span>
                </div>
                <p class="mt-3 text-muted">Cargando estadísticas para: ${informe}</p>
            </div>
        `;

        setTimeout(() => {
            resultados.innerHTML = `
                <div class="col-12">
                    <h3 class="text-info fw-bold mb-4">Detalles del Informe</h3>
                    <h4 class="text-primary">${informe}</h4>
                    <div class="row mt-4">
                        <div class="col-md-6">
                            <h5 class="text-secondary">Estadísticas Generales</h5>
                            <ul class="list-group">
                                <li class="list-group-item">Total de usuarios activos: <strong>${detalles.estadisticas.usuariosActivos}</strong></li>
                                <li class="list-group-item">Tiempo promedio por sesión: <strong>${detalles.estadisticas.tiempoSesion}</strong></li>
                                <li class="list-group-item">Interacciones totales: <strong>${detalles.estadisticas.interacciones}</strong></li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <h5 class="text-secondary">Principales Comportamientos</h5>
                            <ul class="list-group">
                                <li class="list-group-item">Funcionalidad más utilizada: <strong>${detalles.comportamientos.funcionalidad}</strong></li>
                                <li class="list-group-item">Tasa de abandono: <strong>${detalles.comportamientos.tasaAbandono}</strong></li>
                                <li class="list-group-item">Horas pico de uso: <strong>${detalles.comportamientos.horasPico}</strong></li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-4">
                        <button class="btn btn-outline-primary me-2" onclick="InformesApp.mostrarInformes()">Regresar a Informes</button>
                        <button class="btn btn-outline-success" onclick="InformesApp.descargarPDF('${informe}')">Descargar PDF</button>
                    </div>
                </div>
            `;
        }, 1000);
    }

    // Función para generar y descargar el PDF
    function descargarPDF(informe) {
        console.log("Intentando generar PDF para:", informe);
    
        try {
            // Validar que el informe exista en el objeto de detalles
            const detalles = informesDetalles[informe];
            if (!detalles) {
                console.error("No se encontraron detalles para el informe seleccionado.");
                return;
            }
    
            // Verificar si jsPDF está disponible
            if (!window.jspdf) {
                console.error("jsPDF no está disponible. Verifica que el archivo jsPDF se haya cargado correctamente.");
                return;
            }
    
            // Obtener el módulo jsPDF
            const { jsPDF } = window.jspdf;
    
            const doc = new jsPDF();
    
            // Título
            doc.setFontSize(16);
            doc.text("Detalles del Informe", 10, 10);
            doc.setFontSize(14);
            doc.text(informe, 10, 20);
    
            // Estadísticas Generales
            doc.setFontSize(12);
            doc.text("Estadísticas Generales:", 10, 30);
            doc.text(` - Total de usuarios activos: ${detalles.estadisticas.usuariosActivos}`, 10, 40);
            doc.text(` - Tiempo promedio por sesión: ${detalles.estadisticas.tiempoSesion}`, 10, 50);
            doc.text(` - Interacciones totales: ${detalles.estadisticas.interacciones}`, 10, 60);
    
            // Principales Comportamientos
            doc.text("Principales Comportamientos:", 10, 80);
            doc.text(` - Funcionalidad más utilizada: ${detalles.comportamientos.funcionalidad}`, 10, 90);
            doc.text(` - Tasa de abandono: ${detalles.comportamientos.tasaAbandono}`, 10, 100);
            doc.text(` - Horas pico de uso: ${detalles.comportamientos.horasPico}`, 10, 110);
    
            // Descargar el PDF
            doc.save(`${informe}.pdf`);
            console.log("PDF generado y descargado.");
        } catch (error) {
            console.error("Error al generar el PDF:", error);
        }
    }
    
        // Función para registrar auditoría al revisar un informe
        function registrarAuditoriaInforme(informe) {
            const timestamp = new Date().toLocaleString();
            const mensajeAuditoria = `Auditoría registrada: Revisión del informe "${informe}" realizada el ${timestamp}.`;
    
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
    

    return {
        mostrarInformes,
        verDetalles,
        descargarPDF,
    };
})();

