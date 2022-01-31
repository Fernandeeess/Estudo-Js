let area = window.document.getElementById("area");
function clicar(){
    area.innerText = 'clicou';
    area.style.background = "yellow";
    area.style.color = "black"
}
function saiu(){
    area.innerText = 'saiu'
    area.style.background = "red";
}
function entrou(){
    area.innerText = 'entrou'
    area.style.background = "gray";

}
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrou)
area.addEventListener('mouseout', saiu)