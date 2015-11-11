//Pega os elementos HTML pelo ID
//e guarda dentro das variáveis
var mostraLargura = document.getElementById('largura');
var mostraAltura = document.getElementById('altura');
/*Funciona ao redimensionar a página*/
window.onresize = function(){
    //Pega a largura da janela
    largura = window.innerWidth;
    //Pega a altura da janela
    altura = window.innerHeight;
    mostraLargura.innerHTML = largura + ' px ';
    mostraAltura.innerHTML = altura + ' px ';
};

/*Funciona ao carregar a página*/
window.onload = function(){
    //Pega a largura da janela
    largura = window.innerWidth;
    //Pega a altura da janela
    altura = window.innerHeight;
    mostraLargura.innerHTML = largura + ' px ';
    mostraAltura.innerHTML = altura + ' px ';
};

