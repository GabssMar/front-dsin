document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://10.1.52.102:5163/Usuarios/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        if (response.ok) {
            const data = await response.json();
            console.log('Login OK', data);
            console.log(data.usuario)

            if (data.usuario) {
                
                localStorage.setItem('userId', data.usuario.id);
                window.location.href = '/pages/dashboard.html';
            } else {
                document.getElementById('mensagemErro').textContent = 'Erro ao obter dados do usuário.';
            }

           
        } else {
            document.getElementById('mensagemErro').textContent = 'Email ou senha inválidos.';
        }
    } catch (error) {
        console.error('Erro de rede:', error);
        document.getElementById('mensagemErro').textContent = 'Erro ao tentar conectar.';
    }
});

