let selecaoRes = document.getElementById("resultado")
let selecaoStatus = document.getElementById("status")
let pedra = document.getElementById("pedraId")
let papel = document.getElementById("papelId")
let tesoura = document.getElementById("tesouraId")
let botaoJogar = document.getElementById("jogar")
let botaoDeNovo = document.getElementById("jogarDeNovo")

function gerador(){
    return Math.floor(Math.random()*9 +1)
}

function jogar(){
    if(gerador() == 1 || gerador() == 4 || gerador() == 7 && pedra.checked){
        selecaoRes.innerHTML = "Pedra"
        selecaoStatus.innerHTML = "Vocês EMPATARAM"
        selecaoStatus.style.backgroundColor = "#b99726";
    }else if(gerador() == 1 || gerador() == 4 || gerador() == 7 && papel.checked){
        selecaoRes.innerHTML = "Pedra"
        selecaoStatus.innerHTML = "Você GANHOU"
        selecaoStatus.style.backgroundColor = "#26b928";
    }else if(gerador() == 1 || gerador() == 4 || gerador() == 7 && tesoura.checked){
        selecaoRes.innerHTML = "Pedra"
        selecaoStatus.innerHTML = "Você PERDEU"
        selecaoStatus.style.backgroundColor = "#b92630";
    }else if(gerador() == 2 || gerador() == 5 || gerador() == 8 && pedra.checked){
        selecaoRes.innerHTML = "Papel"
        selecaoStatus.innerHTML = "Você PERDEU"
        selecaoStatus.style.backgroundColor = "#b92630";
    }else if(gerador() == 2 || gerador() == 5 || gerador() == 8 && papel.checked){
        selecaoRes.innerHTML = "Papel"
        selecaoStatus.innerHTML = "Vocês EMPATARAM"
        selecaoStatus.style.backgroundColor = "#b99726";
    }else if(gerador() == 2 || gerador() == 5 || gerador() == 8 && tesoura.checked){
        selecaoRes.innerHTML = "Papel"
        selecaoStatus.innerHTML = "Você GANHOU"
        selecaoStatus.style.backgroundColor = "#26b928";
    }else if(gerador() == 3 || gerador() == 6 || gerador() == 9 && pedra.checked){
        selecaoRes.innerHTML = "Tesoura"
        selecaoStatus.innerHTML = "Você GANHOU"
        selecaoStatus.style.backgroundColor = "#26b928";
    }else if(gerador() == 3 || gerador() == 6 || gerador() == 9 && papel.checked){
        selecaoRes.innerHTML = "Tesoura"
        selecaoStatus.innerHTML = "Você PERDEU"
        selecaoStatus.style.backgroundColor = "#b92630";
    }else if(gerador() == 3 || gerador() == 6 || gerador() == 9 && tesoura.checked){
        selecaoRes.innerHTML = "Tesoura"
        selecaoStatus.innerHTML = "Vocês EMPATARAM"
        selecaoStatus.style.backgroundColor = "#b99726";
    }
    botaoJogar.style.display = "none"
    botaoDeNovo.style.display = "block"
}

function recomecar(){
    selecaoStatus.style.backgroundColor = "#19647E"
    selecaoRes.innerHTML = "Adversário"
    selecaoStatus.innerHTML = "Status"
    botaoJogar.style.display = "block"
    botaoDeNovo.style.display = "none"
}