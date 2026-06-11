function contar(){

    let numero = document.getElementById("numero");
    let valor = 0;

    let intervalo = setInterval(() => {

        valor += 5;

        numero.textContent = valor;

        if(valor >= 500){
            clearInterval(intervalo);
        }

    }, 20);
}

const dicas = [

"Desligue aparelhos eletrônicos quando não estiver usando.",

"Utilize garrafas reutilizáveis em vez de descartáveis.",

"Separe corretamente os resíduos recicláveis.",

"Plante árvores nativas da sua região.",

"Aproveite a água da chuva para regar plantas.",

"Valorize produtores locais e agricultura sustentável.",

"Reduza o desperdício de alimentos planejando suas refeições."
];

function novaDica(){

    const indice = Math.floor(Math.random() * dicas.length);

    document.getElementById("dica").textContent = dicas[indice];
}