let todasMultas = []; // Variável global para armazenar as multas carregadas

async function carregarMultas() {
  try {
    const response = await fetch('http://localhost:5163/multas');
    if (!response.ok) throw new Error('Erro ao carregar multas');
    const multas = await response.json();

    todasMultas = multas; // Salva as multas para poder pesquisar

    renderizarMultas(multas);
  } catch (error) {
    console.error(error);
    alert('Erro ao carregar multas.');
  }
}

function renderizarMultas(multas) {
  const container = document.querySelector('.container .mx-auto');
  container.innerHTML = ''; // limpa

  multas.forEach((multa) => {
    const card = document.createElement('div');
      card.className = 'card mb-4 text-white px-4 py-3';
      card.style.backgroundColor = '#2f3d47';
      card.style.borderRadius = '10px';
      card.style.minHeight = 'auto';

    card.innerHTML = `
      <div class="d-flex justify-content-between align-items-start" style="max-height: 80px; overflow: hidden;>
        <div>
          <h5 class="mb-2">${multa.id.toString().padStart(5, '0')}</h5>
          <p class="mb-0"><strong>Proprietário:</strong> ${multa.proprietario ? multa.proprietario.nome : 'N/A'}</p>
          <p class="mb-0">Placa: ${multa.placa}</p>
          <p class="mb-0">Modelo: ${multa.modelo}</p>
          <p class="mb-0">Ano: ${multa.ano}</p>
        </div>
        <div>
          <button class="btn btn-sm btn-light toggle-details" style="font-size: 20px;">&#8226;&#8226;&#8226;</button>
          <button class="btn btn-sm btn-success verificar-multa-btn" style="font-size: 14px; margin-top: 8px;">Verificar Multa</button>
        </div>
      </div>

      <div class="details mt-3" style="display: none;">
        <hr class="border-light">

        <p><strong>Proprietário:</strong> ${multa.proprietario ? multa.proprietario.nome : 'N/A'}</p>
        <p><strong>CNH:</strong> ${multa.proprietario ? multa.proprietario.cnh : 'N/A'}</p>
        <p><strong>CPF:</strong> ${multa.proprietario ? multa.proprietario.cpf : 'N/A'}</p>

        <p><strong>Tipo da Infração:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.tipoInfracao : 'N/A'}</p>
        <p><strong>Código da Infração:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.codigoInfracao : 'N/A'}</p>
        <p><strong>Local:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.localInfracao : 'N/A'}</p>
        <p><strong>Data:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.data : 'N/A'}</p>
        <p><strong>Hora:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.hora : 'N/A'}</p>
        <p><strong>Gravidade:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.gravidade : 'N/A'}</p>
        <p><strong>Pontos na CNH:</strong> ${multa.detalhesInfracao ? multa.detalhesInfracao.pontosCnh : 'N/A'}</p>

        <p><strong>Observações:</strong> ${multa.anexos ? multa.anexos.comentarios : 'Nenhuma'}</p>
      </div>
    `;

    // Evento para expandir/contrair
    const toggleBtn = card.querySelector('.toggle-details');
    const detailsDiv = card.querySelector('.details');
    const verificarBtn = card.querySelector('.verificar-multa-btn');

    toggleBtn.addEventListener('click', () => {
      const isVisible = detailsDiv.style.display === 'block';
      detailsDiv.style.display = isVisible ? 'none' : 'block';
    });

    // Evento para verificar multa
    verificarBtn.addEventListener('click', async () => {
      try {
        const response = await fetch('http://localhost:4000/processar-multas', {
          method: 'POST',
        });
        if (!response.ok) {
          alert('Erro ao verificar a placa.');
          return;
        }
        const data = await response.json();
        if (data.placas && data.placas.length > 0) {
          alert('Placas identificadas: ' + data.placas.join(', '));
        } else {
          alert(data.mensagem || 'Nenhuma placa identificada.');
        }
      } catch (error) {
        alert('Erro ao verificar a placa.');
      }
    });

    container.appendChild(card);
  });
}

// 🔍 Função de filtro
const barraPesquisa = document.getElementById('barra-pesquisa');

barraPesquisa.addEventListener('input', () => {
  const termo = barraPesquisa.value.trim().toLowerCase();

  const multasFiltradas = todasMultas.filter((multa) => {
    const nome = multa.proprietario?.nome?.toLowerCase() || '';
    const cpf = multa.proprietario?.cpf?.toLowerCase() || '';
    const placa = multa.placa?.toLowerCase() || '';

    return (
      nome.includes(termo) ||
      cpf.includes(termo) ||
      placa.includes(termo)
    );
  });

  renderizarMultas(multasFiltradas);
});

window.onload = carregarMultas;
