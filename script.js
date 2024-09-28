function adicionarTexto(memeId, inputId) {
    const memeContainer = document.getElementById(memeId).parentNode;
    const texto = document.getElementById(inputId).value;

    // Limpa textos anteriores
    const textosExistentes = memeContainer.querySelectorAll('.texto-meme');
    textosExistentes.forEach(t => t.remove());

    // Cria um elemento de texto
    const textoElemento = document.createElement('div');
    textoElemento.className = 'texto-meme';
    textoElemento.innerText = texto;

    // Adiciona o texto acima da imagem
    memeContainer.insertBefore(textoElemento, document.getElementById(memeId));
}




function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.style.display = 'none';
    });

    const activeTab = document.getElementById(tabName);
    activeTab.style.display = 'block';
}

// Mostrar a aba de criar meme por padrão
showTab('criarMeme');
