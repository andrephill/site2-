/*primeiro activar o evento de clique do botão*/
var menuIcon = document.querySelector('.menu-icon'); /* variável menuIcon criada para ativar o clique no botão */

var ul = document.querySelector('.ul'); /* criando a variável ul para chamar o menu com o clique no botão */

menuIcon.addEventListener('click', () => {
    // alert("Clicou no ícone do menu") /* testando para ver se activou o clique no botão*/
    // ul.classList.add('ativo');/* testando se foi ativa o clique para aparecer o menu */
    if (ul.classList.contains('ativo')) {/* se a tag ul encontrar a class ativo vai retornar true senão false */
    ul.classList.remove('ativo');     
    document.querySelector('.menu-icon img').src = 'img/menu.png';/* chamando a imagem para o botão menu aberto */
    } else {
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'img/close.png';/* chamando a imagem para o botão menu fechado */
    }
})