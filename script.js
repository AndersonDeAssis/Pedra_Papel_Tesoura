let selecaoRes = document.getElementById("resultado")
let selecaoStatus = document.getElementById("status")
let pedra = document.getElementById("pedraId")
let papel = document.getElementById("papelId")
let tesoura = document.getElementById("tesouraId")
let botaoJogar = document.getElementById("jogar")
let botaoDeNovo = document.getElementById("jogarDeNovo")

function gerador(){
    return Math.floor(Math.random()*3 +1)
}

function jogar(){

    let valor = gerador()

    if(valor == 1){
        selecaoRes.innerHTML = "Pedra"
        if(pedra.checked){
            selecaoStatus.innerHTML = "Vocês EMPATARAM"
            selecaoStatus.style.backgroundColor = "#b99726";
        }else if(papel.checked){
            selecaoStatus.innerHTML = "Você GANHOU"
            selecaoStatus.style.backgroundColor = "#26b928";
        }else if(tesoura.checked){
            selecaoStatus.innerHTML = "Você PERDEU"
            selecaoStatus.style.backgroundColor = "#b92630";
        }
    }else if(valor == 2){
        selecaoRes.innerHTML = "Papel"
        if(pedra.checked){
            selecaoStatus.innerHTML = "Você PERDEU"
            selecaoStatus.style.backgroundColor = "#b92630";
        }else if(papel.checked){
            selecaoStatus.innerHTML = "Vocês EMPATARAM"
            selecaoStatus.style.backgroundColor = "#b99726";
        }else if(tesoura.checked){
            selecaoStatus.innerHTML = "Você GANHOU"
            selecaoStatus.style.backgroundColor = "#26b928";
        }
    }else if(valor == 3){
        selecaoRes.innerHTML = "Tesoura"
        if(pedra.checked){
            selecaoStatus.innerHTML = "Você GANHOU"
            selecaoStatus.style.backgroundColor = "#26b928";
        }else if(papel.checked){
            selecaoStatus.innerHTML = "Você PERDEU"
            selecaoStatus.style.backgroundColor = "#b92630";
        }else if(tesoura.checked){
            selecaoStatus.innerHTML = "Vocês EMPATARAM"
            selecaoStatus.style.backgroundColor = "#b99726";
        }
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