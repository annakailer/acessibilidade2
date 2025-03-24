document.addEventListener('DOMContentLoaded', function () {
    let tamanhoAtualFonte = 1;
    const aumentFonteBotao = document.getElementById('aumentar-fonte');

    aumentFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`
    })
})