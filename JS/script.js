 document.getElementById('loginForm').addEventListener('submit', async function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const turma = document.getElementById('turmaSelect').value;
      const rememberMe = document.getElementById('rememberMe').checked;

      try {
        const response = await fetch("/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password, turma, rememberMe })
        });

        const data = await response.json();

        if (response.ok) {
          alert("Login realizado com sucesso!\nBem-vindo " + data.user.username);
          localStorage.setItem('userId', data.user._id); // Salva o ID do usuário
          window.location.href = "home.html";
        } else {
          alert("Erro no login: " + data.message);
        }
      } catch (error) {
        console.error("Erro ao conectar com o servidor:", error);
        alert("Erro de conexão com o servidor.");
      }
    });