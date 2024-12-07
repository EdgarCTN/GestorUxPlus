// Usuarios simulados
const usuarios = [
    { username: "admin", password: "admin123", role: "Administrador del Sistema" },
    { username: "gerente", password: "gerente123", role: "Gerente de Proyecto" },
  ];
  
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorDiv = document.getElementById("error");
  
    // Validación de campos
    if (!username || !password) {
      errorDiv.style.display = "block";
      errorDiv.textContent = "Por favor, complete todos los campos.";
      return;
    }
  
    // Verificación de usuario
    const usuario = usuarios.find(
      (user) => user.username === username && user.password === password
    );
  
    if (usuario) {
      // Redirigir a la pantalla principal con simulación de rol
      localStorage.setItem("rol", usuario.role); // Guardar el rol para la siguiente pantalla
      window.location.href = "index.html"; // Cambiar a la pantalla principal
    } else {
      errorDiv.style.display = "block";
      errorDiv.textContent = "Credenciales incorrectas. Inténtelo nuevamente.";
    }
  });
  