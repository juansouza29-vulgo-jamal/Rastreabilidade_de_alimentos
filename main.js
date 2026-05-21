// Base de dados simulada de alimentos rastreados
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

// Seleção de elementos do HTML
const searchBtn = document.getElementById('search-btn');
const batchInput = document.getElementById('batch-input');
const resultContainer = document.getElementById('result-container');

// Evento de clique do botão de busca
searchBtn.addEventListener('click', () => {
    const inputCode = batchInput.value.trim().toUpperCase();

    // Limpa estados anteriores
    resultContainer.classList.add('hidden');
    resultContainer.classList.remove('error');

    // Valida se o campo está vazio
    if (inputCode === "") {
        alert("Por favor, digite um código de lote.");
        return;
    }

    // Verifica se o lote existe na nossa base simulada
    if (database[inputCode]) {
        const info = database[inputCode];
        
        // Monta a estrutura de resposta positiva no HTML
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
        // Caso o código digitado esteja incorreto
        resultContainer.classList.add('error');
        resultContainer.innerHTML = `
            <h3>❌ Lote não encontrado</h3>
            <p>Não encontramos informações para o código <strong>${inputCode}</strong>. Verifique o código e tente novamente.</p>
        `;
    }

    // Mostra o container na tela
    resultContainer.classList.remove('hidden');
});
