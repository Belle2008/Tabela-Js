// cria a tabela
let tabela = '<table>';
// cria as linhas
for (let linhas = 1; linhas <= 7; linhas++) {
    tabela += '<tr>';

    // cria as colunas
    for (let colunas = 1; colunas <= 18; colunas++) {
        tabela += '<td class="elemento">
                 <span class="H">1</span>
                 <span class="H">1</span>
                 <span class="H">1</span>
                 <span class="H">1</span>
              </td>
    }

    tabela += '</tr>'; // fecha a linha
}

// finaliza a tabela
tabela += '</table>';

// adiciona a tabela no local
document.getElementById('tabela-periodica').innerHTML = tabela;
