document.addEventListener('DOMContentLoaded', () => {

    // --- BANCO DE DADOS DE NOTÍCIAS (Com texto completo) ---
    const noticias = [
        {
            titulo: "Crédito Rural bate recorde histórico no primeiro semestre",
            resumo: "Novas linhas de financiamento verde e incentivos governamentais impulsionaram a adoção de tecnologias sustentáveis em pequenas e médias propriedades.",
            textoCompleto: "<p>O setor agropecuário brasileiro registrou um marco histórico no primeiro semestre deste ano com a liberação recorde de recursos voltados ao Crédito Rural. O volume financeiro movimentado superou as expectativas do mercado, impulsionado majoritariamente pela forte adesão às linhas de financiamento sustentável (conhecidas como fundos verdes).</p><p>Pequenos e médios produtores foram os maiores beneficiados, utilizando o capital para a modernização de maquinários, implementação de sistemas de irrigação inteligente e transição para práticas de agricultura regenerativa de baixo carbono. Analistas econômicos apontam que este cenário robustece a economia interna, garantindo segurança alimentar e maior competitividade internacional para os próximos trimestres.</p>",
            imagem: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&w=800&q=80",
            categoria: "Finanças"
        },
        {
            titulo: "Demanda asiática por milho brasileiro cresce 15% em 2026",
            resumo: "Gargalos logísticos superados nos portos do Arco Norte aceleraram o fluxo de escoamento da safra recorde do Centro-Oeste brasileiro.",
            textoCompleto: "<p>As exportações de milho do Brasil para o continente asiático registraram uma expansão expressiva de 15% no acumulado deste ano. A alta na demanda foi amplamente atendida devido à eficiência operacional conquistada nos complexos portuários localizados no Arco Norte do país.</p><p>A otimização logística reduziu drasticamente o tempo de escoamento das safras vindas do Centro-Oeste, reduzindo os custos de frete e tornando o produto brasileiro altamente atrativo em comparação com concorrentes norte-americanos. A expectativa é que esse ritmo comercial se mantenha firme, abrindo novos mercados também para subprodutos, como o farelo de milho voltado à nutrição animal.</p>",
            imagem: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&w=800&q=80",
            categoria: "Mercado Externo"
        },
        {
            titulo: "Como a Inteligência Artificial e a IoT barateiam a produção",
            resumo: "Sensores de solo de baixo custo e análises preditivas climáticas via satélite ajudam produtores a economizar até 30% em defensivos agrícolas.",
            textoCompleto: "<p>A revolução tecnológica no campo deixou de ser exclusividade de megacorporações. A integração de sensores de Internet das Coisas (IoT) aplicados ao solo, conectados a algoritmos de Inteligência Artificial, está democratizando a economia de insumos em propriedades de diversos tamanhos.</p><p>Com dados precisos capturados em tempo real e cruzados com relatórios meteorológicos de satélite, o produtor sabe o momento e o local exato que necessitam de intervenção. O resultado direto reflete no bolso: houve uma redução média observada de 30% nos custos de aplicação de defensivos agrícolas e fertilizantes, gerando ganhos de margem financeira expressivos e mitigando impactos ambientais no ecossistema local.</p>",
            imagem: "https://images.unsplash.com/photo-1625246333195-78d9c38ad451?auto=format&fit=crop&w=800&q=80",
            categoria: "Tecnologia"
        }
    ];

    // --- CARREGAR VITRINE DE NOTÍCIAS (Se estiver na Index) ---
    const newsContainer = document.getElementById('newsContainer');
    if (newsContainer) {
        noticias.forEach((item, index) => {
            const cardHtml = `
                <article class="news-card">
                    <img src="${item.imagem}" alt="${item.titulo}" class="news-img">
                    <div class="news-body">
                        <span class="news-tag">${item.categoria}</span>
                        <h3>${item.titulo}</h3>
                        <p>${item.resumo}</p>
                        <a href="noticia.html?id=${index}" class="news-link">Ler notícia completa <i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </article>
            `;
            newsContainer.innerHTML += cardHtml;
        });
    }

    // --- CARREGAR PÁGINA DE NOTÍCIA COMPLETA (Se estiver na noticia.html) ---
    if (window.location.pathname.includes('noticia.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const noticiaId = urlParams.get('id');

        if (noticiaId !== null && noticias[noticiaId]) {
            const dadosNoticia = noticias[noticiaId];
            document.getElementById('noticiaTitulo').innerText = dadosNoticia.titulo;
            document.getElementById('noticiaCategoria').innerText = dadosNoticia.categoria;
            document.getElementById('noticiaImagem').src = dadosNoticia.imagem;
            document.getElementById('noticiaImagem').alt = dadosNoticia.titulo;
            document.getElementById('noticiaTexto').innerHTML = dadosNoticia.textoCompleto;
            document.title = `AgroEcon | ${dadosNoticia.titulo}`;
        } else {
            document.getElementById('noticiaTitulo').innerText = "Notícia não encontrada";
        }
    }

    // --- CARREGAR GRÁFICOS (Apenas se os elementos existirem na página atual) ---
    const ctxCommodities = document.getElementById('commoditiesChart');
    if (ctxCommodities) {
        new Chart(ctxCommodities.getContext('2d'), {
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
            }
        });
    }

    const ctxExports = document.getElementById('exportDestinationsChart');
    if (ctxExports) {
        new Chart(ctxExports.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['China', 'União Europeia', 'Estados Unidos', 'Demais Países'],
                datasets: [{
                    data: [38, 18, 12, 32],
                    backgroundColor: ['#1b4332', '#2d6a4f', '#40916c', '#74c69d']
                }]
            }
        });
    }
});
