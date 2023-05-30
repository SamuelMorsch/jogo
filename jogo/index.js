alert("Bem Vindo(a) ao jogo")

const jogar = prompt("Quer entrar no Jogo? (s/n): ")

switch (jogar) {
    case "s":
        //Atacante
        const nomeAtacante = prompt("Nome do Atacante: ")
        let poderAtaque = prompt("Poder de ataque do Personagem: ")
        console.log("Atacante:\n",nomeAtacante,"\n","Ataque: ",poderAtaque,"\n")

        //Outro Personagem
        const nomeDefensor = prompt("Nome do Defensor: ")
        let pontosDeVida = prompt("Pontos de vida do Defensor: ")
        let poderDefesa = prompt("Poder de Defesa: ")
        const escudo = prompt("Ele vai possuir um Escudo? (s/n): ")
        console.log("\nDefensor:\n",nomeDefensor,"\n","Vida: ",pontosDeVida,"\n","Defesa: ",poderDefesa,"\n","Escudo: ",escudo)

        //Dano causado
        if (parseInt(poderAtaque) > parseInt(poderDefesa) && escudo === "n") {
            dano = poderAtaque - poderDefesa
            pontosDeVida = pontosDeVida - dano
            console.log("Dano Causado a ",nomeDefensor,"\n",dano)

        }   

        if (parseInt(poderAtaque) > parseInt(poderDefesa) && escudo === "s") {
            dano = (poderAtaque - poderDefesa) / 2
            pontosDeVida = pontosDeVida - dano
            console.log("Dano causado a ",nomeDefensor,"\n",dano)

        }

        if (poderAtaque <= poderDefesa) {
            dano = 0
            pontosDeVida = pontosDeVida - dano
            console.log("Dano causado a ",nomeDefensor,"\n",dano)
        }

        if (pontosDeVida < 0) {
            pontosDeVida = 0
        }

        console.log("Dados Atualizados:\n","Defensor\n","Vida: ",pontosDeVida,"\n","Defesa: ",poderDefesa,"\n","Escudo: ",escudo)

        if (pontosDeVida <= 0) {
            console.log("Você MORREU!")
        }
        
        break;

    case "n":
        alert("ok :)")
        alert("Adeus...")
        break;
}

/* //Atacante
const nomeAtacante = prompt("Nome do Atacante: ")
let poderAtaque = prompt("Poder de ataque do Personagem: ")
console.log("Atacante:\n",nomeAtacante,"\n","Ataque: ",poderAtaque,"\n")

//Outro Personagem
const nomeDefensor = prompt("Nome do Defensor: ")
let pontosDeVida = prompt("Pontos de vida do Defensor: ")
let poderDefesa = prompt("Poder de Defesa: ")
const escudo = prompt("Ele vai possuir um Escudo? (s/n): ")
console.log("\nDefensor:\n",nomeDefensor,"\n","Vida: ",pontosDeVida,"\n","Defesa: ",poderDefesa,"\n","Escudo: ",escudo)

//Dano causado
if (parseInt(poderAtaque) > parseInt(poderDefesa) && escudo === "n") {
    dano = poderAtaque - poderDefesa
    pontosDeVida = pontosDeVida - dano
    console.log("Dano Causado a ",nomeDefensor,"\n",dano)

}   

if (parseInt(poderAtaque) > parseInt(poderDefesa) && escudo === "s") {
    dano = (poderAtaque - poderDefesa) / 2
    pontosDeVida = pontosDeVida - dano
    console.log("Dano causado a ",nomeDefensor,"\n",dano)

}

if (poderAtaque <= poderDefesa) {
    dano = 0
    pontosDeVida = pontosDeVida - dano
    console.log("Dano causado a ",nomeDefensor,"\n",dano)
}

if (pontosDeVida < 0) {
    pontosDeVida = 0
}

console.log("Dados Atualizados:\n","Defensor\n","Vida: ",pontosDeVida,"\n","Defesa: ",poderDefesa,"\n","Escudo: ",escudo)

if (pontosDeVida <= 0) {
    console.log("Você MORREU!")
} */

