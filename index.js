/* Não mexer nessa parte */
(function() {
    document.getElementById('quantity').addEventListener('input', function(e) {
        e.target.value = e.target.value.replace(/\D/g, "");
    });

    document.getElementById('calcular').addEventListener('click', function(e) {
        calcular(parseInt(document.getElementById('quantity').value));
    });
})()
/* Fim */

// Comment by Felipe Marcondes:
// Chamei o input de (quantity) para a página abrir já com foco no campo para que o valor em gramas 
// já possa ser digitado. Resgatei o comando ao fim da função calcular para o campo ser ativado novamente após
// o término do cálculo e a limpeza do campo. 
// Fim do Comment.

document.getElementById('quantity').focus();


/**
 * O Objetivo do desafio é escrever uma função que efetua o calculo da renda obtida
 * por meio da conversão de cana-de-açúcar em etanol.
 * 
 * Regras:
 * Cada 1g de cana-de-açúcar contem:
 * - 50% de açúcar - que é convertido para 16 Mols de etanol;
 * - 40% de holocelulose - que é convertida para 8 Mols de etanol;
 * - 10% de lignina - que é convertida para 2 Mols negativos de etanol (-2 Mols);
 * 
 * Cada 1 Mol de etanol gera de renda 2,57 Reais ou R$ 2,57
 * 
 * Escreva uma função que calcula a renda gerada a partir da
 * quantidade em gramas inseridas no campo
 */

/**
 * Trabalhe nessa Função abaixo
 * 
 * Não é necessário alterar nada do que está fora das chaves ({ })
 * apenas trabalhe no que está dentro da função.
 */
function calcular(gramas) {
    // Gramas é a quantidade em gramas inserida no campo texto.

    // A variável resultado é utilizada para dar ao usuário o valor em reais.
    var resultado = `Total: R$ ${gramas * (16 + 8 - 2) * 2.57}`;

    /**
     * Utilize o alerta abaixo para escrever na tela do usuário o resultado,
     * não esqueça de formatar adicionando 'R$ '.
     */
    alert(resultado);

    var clearQuantity = document.getElementById('quantity').value = "";
    quantity.focus();

    
}