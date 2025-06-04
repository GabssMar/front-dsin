const ctx = document.getElementById('grafico1');
const ctx2 = document.getElementById('grafico2');
const ctx3 = document.getElementById('grafico3');
const ctx4 = document.getElementById('grafico4');

    let modelo = ["CB300", "GOL", "BIZ", "Onix", "Intruder125"]
    let contagem = [1, 3, 2, 5, 9]
    let contagem2 = [ 9, 5, 6]
    let tipo = ["Grave", "Média", "Grave", "Leve", "Grave"]
    let tipo2 = ["Grave", "Média", "Leve"]
    let estado = ["SP", "RJ", "AM", "AC"]
    let contagemEstado = [3, 2, 1, 1]
    let fabricante = ["Honda", "Chevrolet", "Wolkswagen", "Suzuki"]
    let contagemFabricante = [4, 1, 1, 1]
    let usuarioId = []
    let pais = []

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: modelo,
            datasets: [{
                label: 'Contagem de Modelo por Infração',
                data: contagem,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    new Chart(ctx2, {
        type: 'line',
        data: {
            labels: tipo2,
            datasets: [{
                label: 'Contagem de Infração por Tipo ',
                data: contagem2,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctx3, {
        type: 'doughnut',
        data: {
            labels: estado,
            datasets: [{
                label: 'Contagem de Infração por Estado',
                data: contagemEstado,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    new Chart(ctx4, {
        type: 'bar',
        data: {
            labels: fabricante,
            datasets: [{
                label: 'Contagem de Infração por Fabricante',
                data: contagemEstado,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
