/*

objetivo 1 - quando o usuario clicar no botao de seleçao de plataformas deve abrir uma caixa com os botoes de seleçao de plataforma
    passo 1 - pegar o botao de selecao de plataformas no JS pra poder verificar quando o suario clicar em cima dele
    passo 2 - pegar o elemento do conteudo que precisa ser mostrado
    passo 3 - pegar o clique do usuario no js
    passo 4 - quando o usuario clicar, adicionar a classe ativo ao botao pra que o conteudo dele apareça

objetivo 2 - caso a lista de botoes de plataforma jja esteja aparecendo e o usuario clicar no botao de fechar, o conteudo deve ser escondido
    passo 1 - verificar se o botao esta baerto, se sim, devemos remover a classe ativo pra que ele esconda o conteudo novamente
*/

const botao = document.querySelector(".btn-plataformar");

const elementoPlataformas = document.querySelector(".btn-plataformar .plataformas");

botao.addEventListener("click", () => {
    
    elementoPlataformas.classList.toggle("ativo");
    //if(botaoEstaAberto){
//elementoPlataformas.classList.remove("ativo");
   // } else{
//elementoPlataformas.classList.add("ativo");
   // }
    

} );