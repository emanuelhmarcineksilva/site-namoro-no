
function aceitouPedido() {
    alert('hum... melhor não.');
}

// Dentro dos parentes aqui, esta o que foi mandado no html atraves do uso do "this".
function desvia(botao) {
    const btn = botao;
    console.log(btn); // Veja no console. Não conhecia essa forma de chamar um código do html.
    btn.style.position = 'absolute';
    btn.style.bottom = numeroAleatorio(10, 90);
    btn.style.left = numeroAleatorio(10, 90);
    console.log('desviei')
}

function numeroAleatorio(min, max) {
    return (Math.random() * (max - min) + min) + '%';
}
