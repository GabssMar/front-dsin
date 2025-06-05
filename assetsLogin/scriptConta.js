document.addEventListener('DOMContentLoaded', async () => {
    const userId = localStorage.getItem('userId'); 
    if (!userId) {
        console.error("ID do usuário não encontrado.");
        window.location.href = "../index.html"; 
        return;
    }

    try {
        const response = await fetch(`http://localhost:5163/Usuarios/${userId}`);

        if (!response.ok) {
            throw new Error("Usuário não encontrado");
        }

        const usuario = await response.json();

        
        document.getElementById('nomeAgente').textContent = usuario.nome;
        document.getElementById('codigoAgente').textContent = `Código do Agente: ${usuario.codigoAgente}`;
        document.getElementById('email').value = usuario.email;
        document.getElementById('senha').value = usuario.senha;

    } catch (error) {
        console.error('Erro ao buscar dados do usuário:', error);
        document.getElementById('nomeAgente').textContent = "Erro ao carregar dados";
    }
});
function logout() {
    localStorage.removeItem('userId');
}
