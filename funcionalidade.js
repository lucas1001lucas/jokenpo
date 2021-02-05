let escolhaUm = ''
let escolhaDois = ''

function clicou(escolha) {
    if (escolhaUm == '') {
        clicouPrimeiro(escolha)
    } else if (escolhaDois == '') {
        clicouSegundo(escolha)        
    }
}

function clicouPrimeiro(escolha) {
    let acesso = window.document.getElementById("titulo")

    acesso.innerHTML = "Vez do jogador 2"
    escolhaUm = escolha
}

function clicouSegundo(escolha) {
    escolhaDois = escolha
    
    checar()
}

function checar() {
    let acesso = window.document.getElementById("titulo")

    switch (escolhaUm) {
        case 'Pedra':
            switch (escolhaDois) {
                case 'Pedra':
                    acesso.innerHTML = "Empate: Pedra vs Pedra"
                    break;
                case 'Papel':
                    acesso.innerHTML = "Vitória do jogador 2: Pedra vs Papel"
                    break;
                case 'Tesoura':
                    acesso.innerHTML = "Vitória do jogador 1: Pedra vs Tesoura"
                    break;
            }
            break;
        
        case 'Papel':
            switch (escolhaDois) {
                case 'Pedra':
                    acesso.innerHTML = "Vitória do jogador 1: Papel vs Pedra"
                    break;
                case 'Papel':
                    acesso.innerHTML = "Empate: Papel vs Papel"
                    break;
                case 'Tesoura':
                    acesso.innerHTML = "Vitória do jogador 2: Papel vs Tesoura"
                    break;
            }  
            break;
        
        case 'Tesoura':
            switch (escolhaDois) {
                case 'Pedra':
                    acesso.innerHTML = "Vitória do jogador 2: Tesoura vs Pedra"
                    break;
                case 'Papel':
                    acesso.innerHTML = "Vitória do jogador 1: Tesoura vs Papel"
                    break;
                case 'Tesoura':
                    acesso.innerHTML = "Empate: Tesoura vs Tesoura"
                    break;
            }   
            break;
    }
}

function reiniciar() {
    let acesso = window.document.getElementById("titulo")

    acesso.innerHTML = "Vez do jogador 1"
    escolhaUm = ''
    escolhaDois = ''
}

function ColorAndTransparence(identificacao, cor, transparencia) {
    let acesso = window.document.getElementById(identificacao)

    acesso.style.backgroundColor = `rgb(${cor}, ${transparencia})`
}