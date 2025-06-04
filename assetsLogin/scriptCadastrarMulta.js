// scriptCadastroMulta.js
document.getElementById('btnSalvar').addEventListener('click', async () => {
    try {
        const idUsuario = localStorage.getItem('userId');

        // Captura os dados do veículo
        const dadosVeiculo = {
            placa: document.getElementById('placa').value,
            modelo: document.getElementById('modelo').value,
            fabricante: document.getElementById('fabricante').value,
            cor: document.getElementById('cor').value,
            ano: document.getElementById('ano').value,
            idUsuario: parseInt(idUsuario)
        };

        // Dados do condutor
        const dadosProprietario = {
            nome: document.getElementById('nome').value,
            cnh: document.getElementById('cnh').value,
            cpf: document.getElementById('cpf').value
        };

        // Detalhes da infração
        const detalhesInfracao = {
            tipoInfracao: document.getElementById('tipoInfracao').value,
            codigoInfracao: document.getElementById('codigoInfracao').value,
            locaInfracao: document.getElementById('localInfracao').value,
            data: document.getElementById('data').value,
            hota: document.getElementById('hora').value,
            gravidade: document.getElementById('gravidade').value,
            pontosCnh: document.getElementById('pontosCnh').value
        };

        const evidenciaInput = document.getElementById('evidencia');
        const evidenciaFile = evidenciaInput.files.length > 0 ? evidenciaInput.files[0] : null;

        if (!evidenciaFile) {
            alert("Por favor, selecione uma imagem de evidência.");
            return;
        }

        const comentarios = document.getElementById('comentarios').value;

        // Prepara o FormData
        const formData = new FormData();
        formData.append('DadosVeiculo', JSON.stringify(dadosVeiculo));
        formData.append('DadosProprietario', JSON.stringify(dadosProprietario));
        formData.append('DetalhesInfracao', JSON.stringify(detalhesInfracao));
        formData.append('Comentarios', comentarios);
        formData.append('Evidencia', evidenciaFile);

        // Envia para a API
        const response = await fetch('https://localhost:7095/multas', {
            method: 'POST',
            body: formData
        });

        if (response.ok) {
            alert('Multa cadastrada com sucesso!');
            document.querySelector('form').reset();
        } else {
            alert('Erro ao cadastrar multa.');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro inesperado ao cadastrar multa.');
    }
});
