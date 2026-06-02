document.addEventListener('DOMContentLoaded', () => {
    
    // --- GRÁFICO 1: COMMODITIES (Linhas) ---
    const ctxCommodities = document.getElementById('commoditiesChart').getContext('2d');
    new Chart(ctxCommodities, {
        type: 'line',
        data: {
            labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
            datasets: [
                {
                    label: 'Soja',
                    data: [420, 435, 410, 445, 460, 455],
                    borderColor: '#2c5e3b',
                    backgroundColor: 'rgba(44, 94, 59, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: 'Milho',
                    data: [180, 195, 190, 210, 205, 220],
                    borderColor: '#e67e22',
                    backgroundColor: 'rgba(230, 126, 34, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'top' }
            },
            scales: {
                y: { beginAtZero: false }
            }
        }
    });

    // --- GRÁFICO 2: EXPORTAÇÕES (Rosca/Doughnut) ---
    const ctxExports = document.getElementById('exportDestinationsChart').getContext('2d');
    new Chart(ctxExports, {
        type: 'doughnut',
        data: {
            labels: ['China', 'União Europeia', 'Estados Unidos', 'Demais Países'],
            datasets: [{
                data: [38, 18, 12, 32],
                backgroundColor: ['#1b4332', '#2d6a4f', '#40916c', '#74c69d'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: 'right' }
            }
        }
    });

    // --- RENDERIZAÇÃO DINÂMICA DE NOTÍCIAS ---
    const noticias = [
        {
            titulo: "Crédito Rural bate recorde histórico no primeiro semestre",
            resumo: "Novas linhas de financiamento verde e incentivos governamentais impulsionaram a adoção de tecnologias sustentáveis em pequenas e médias propriedades.",
            imagem: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=400&q=80",
            categoria: "Finanças"
        },
        {
            titulo: "Demanda asiática por milho brasileiro cresce 15% em 2026",
            resumo: "Gargalos logísticos superados nos portos do Arco Norte aceleraram o fluxo de escoamento da safra recorde do Centro-Oeste brasileiro.",
            imagem: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=400&q=80",
            categoria: "Mercado Externo"
        },
        {
            titulo: "Como a Inteligência Artificial e a IoT barateiam a produção",
            resumo: "Sensores de solo de baixo custo e análises preditivas climáticas via satélite ajudam produtores a economizar até 30% em defensivos agrícolas.",
            imagem: "https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&w=400&q=80",
            categoria: "Tecnologia"
        }
    ];

    const newsContainer = document.getElementById('newsContainer');

    noticias.forEach(item => {
        const cardHtml = `
            <article class="news-card">
                <img src="${item.imagem}" alt="${item.titulo}" class="news-img">
                <div class="news-body">
                    <span class="news-tag">${item.categoria}</span>
                    <h3>${item.titulo}</h3>
                    <p>${item.resumo}</p>
                    <a href="#" class="news-link">Ler análise completa <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </article>
        `;
        newsContainer.innerHTML += cardHtml;
    });

    // Toggle Menu Mobile básico
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        if(navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#fff';
            navLinks.style.padding = '20px';
            navLinks.style.boxShadow = '0 5px 10px rgba(0,0,0,0.1)';
        }
    });
});
