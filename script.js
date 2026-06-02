// Renderização Condicional de Gráficos de acordo com a Página Atual

document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Gráfico da Página Inicial (Dashboard)
    const ctxHome = document.getElementById('chartHome');
    if (ctxHome) {
        new Chart(ctxHome, {
            type: 'bar',
            data: {
                labels: ['2022', '2023', '2024', '2025', '2026*'],
                datasets: [
                    {
                        label: 'Complexo Soja (Bilhões US$)',
                        data: [46.5, 53.2, 48.9, 51.0, 54.5],
                        backgroundColor: '#15803d'
                    },
                    {
                        label: 'Carnes (Bilhões US$)',
                        data: [22.1, 23.5, 21.8, 24.2, 25.0],
                        backgroundColor: '#b91c1c'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    }

    // 2. Gráficos da Página de Análises Detalhadas
    const ctxPie = document.getElementById('chartPieAgro');
    if (ctxPie) {
        new Chart(ctxPie, {
            type: 'doughnut',
            data: {
                labels: ['Grãos e Cereais', 'Pastagens/Pecuária', 'Culturas Permanentes', 'Florestas Plantadas'],
                datasets: [{
                    data: [45, 35, 12, 8],
                    backgroundColor: ['#16a34a', '#eab308', '#2563eb', '#dc2626']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'right' }
                }
            }
        });
    }

    const ctxLine = document.getElementById('chartLineAgro');
    if (ctxLine) {
        new Chart(ctxLine, {
            type: 'line',
            data: {
                labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
                datasets: [{
                    label: 'Preço Médio da Saca (R$)',
                    data: [128, 131, 134, 132, 138, 141],
                    borderColor: '#16a34a',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                }
            }
        });
    }
});
