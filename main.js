// --- SISTEMA DO MENU HAMBÚRGUER ---
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenu = document.getElementById('nav-menu');

hamburgerBtn.addEventListener('click', () => {
    // Abre ou fecha a lista de menus no celular
    navMenu.classList.toggle('open');
    // Faz os traços do botão virarem um "X"
    hamburgerBtn.classList.toggle('active');
});

// Fecha o menu automaticamente ao clicar em qualquer item dele (melhor usabilidade)
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburgerBtn.classList.remove('active');
    });
});


// --- SISTEMA DE BUSCA DE ALIMENTOS ---
const database = {
    "LOTE123": {
        produto: "Tomate Orgânico (Bandeja 500g)",
        produtor: "Sítio Primavera - Mogi das Cruzes/SP",
        colheita: "18/05/2026",
        transporte: "Logística Verde Terrestre (Refrigerado)",
        certificado: "Selo Orgânico Brasil Certificado"
    },
    "LOTE456": {
        produto: "Alface Crespa Hidropônica",
        produtor: "Chácara Vale Verde - Atibaia/SP",
        colheita: "19/05/2026",
        transporte: "Distribuição Direta Expressa",
        certificado: "Livre de Agrotóxicos Nível A"
    }
};

const searchBtn = document.getElementById('search-btn');
const batchInput = document.getElementById('batch-input');
const resultContainer = document.getElementById('result-container');

searchBtn.addEventListener('click', () => {
    const inputCode = batchInput.value.trim().toUpperCase();

    resultContainer.classList.add('hidden');
    resultContainer.classList.remove('error');

    if (inputCode === "") {
        alert("Por favor, digite um código de lote.");
        return;
    }

    if (database[inputCode]) {
        const info = database[inputCode];
        resultContainer.innerHTML = `
            <h3>🌾 Alimento Localizado!</h3>
            <ul>
                <li><strong>Produto:</strong> ${info.produto}</li>
                <li><strong>Origem/Produtor:</strong> ${info.produtor}</li>
                <li><strong>Data de Colheita:</strong> ${info.colheita}</li>
                <li><strong>Logística:</strong> ${info.transporte}</li>
                <li><strong>Certificação:</strong> ${info.certificado}</li>
            </ul>
        `;
    } else {
        resultContainer.classList.add('error');
        resultContainer.innerHTML = `
            <h3>❌ Lote não encontrado</h3>
            <p>Não encontramos informações para o código <strong>${inputCode}</strong>. Verifique o código e tente novamente.</p>
        `;
    }

    resultContainer.classList.remove('hidden');
});
