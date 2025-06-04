const ctx = document.getElementById('grafico1');
const ctx2 = document.getElementById('grafico2');
const ctx3 = document.getElementById('grafico3');
const ctx4 = document.getElementById('grafico4');

async function carregarMultas() {
    try {
        const response = await fetch('https://localhost:7095/multas');
        if (!response.ok) throw new Error('Erro ao carregar multas');
        return await response.json();
    } catch (error) {
        console.error(error);
        alert('Erro ao carregar multas.');
        return [];
    }
}

function processarDados(multas) {
    const modeloCount = {};
    const tipoCount = {};
    const estadoCount = {};
    const fabricanteCount = {};

    multas.forEach(multa => {
        const modelo = multa.modelo || multa.dadosVeiculo?.modelo || 'Desconhecido';
        const tipo = multa.detalhesInfracao?.tipoInfracao || 'Desconhecido';
        const estado = multa.estado || multa.detalhesInfracao?.localInfracao || 'Desconhecido'; // adapte aqui
        const fabricante = multa.fabricante || (multa.dadosVeiculo?.fabricante || 'Desconhecido').trim().toUpperCase();


        modeloCount[modelo] = (modeloCount[modelo] || 0) + 1;
        tipoCount[tipo] = (tipoCount[tipo] || 0) + 1;
        estadoCount[estado] = (estadoCount[estado] || 0) + 1;
        fabricanteCount[fabricante] = (fabricanteCount[fabricante] || 0) + 1;
    });

    return {
        modelo: modeloCount,
        tipo: tipoCount,
        estado: estadoCount,
        fabricante: fabricanteCount
    };
    }

function criarGraficoBarra(ctx, labels, data, titulo) {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: titulo,
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
    }

function criarGraficoLinha(ctx, labels, data, titulo) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: titulo,
                data: data,
                fill: false,
                borderColor: 'rgba(75, 192, 192, 1)',
                ension: 0.3
            }]
            },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: true }
            }
        }
    });
}

function criarGraficoRosquinha(ctx, labels, data, titulo) {
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: titulo,
                data: data,
                backgroundColor: [
                    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
                ]
            }]
        },
        options: {
            responsive: true
        }
    });
}

async function inicializarGraficos() {
    const multas = await carregarMultas();
    const dados = processarDados(multas);

    criarGraficoBarra(ctx, Object.keys(dados.modelo), Object.values(dados.modelo), 'Modelos por infração');
    criarGraficoLinha(ctx2, Object.keys(dados.tipo), Object.values(dados.tipo), 'Tipos de infração');
    criarGraficoRosquinha(ctx3, Object.keys(dados.estado), Object.values(dados.estado), 'Infrações por estado');
    criarGraficoBarra(ctx4, Object.keys(dados.fabricante), Object.values(dados.fabricante), 'Fabricantes');
}

window.onload = inicializarGraficos;
