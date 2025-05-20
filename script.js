// cria a tabela
let tabela = '<table>';
// cria as linhas
for (let linhas = 1; linhas <= 7; linhas++) {
    tabela += '<tr>';

    // cria as colunas
    for (let colunas = 1; colunas <= 18; colunas++) {
        tabela += `<table>
    <tr>
      <td>
        <span class="numeroAtomico">1</span>
        <span class="simbolo">H</span>
        <span class="nomeelemento">Hidrogênio</span>
        <span class="massaAtomica">1.008</span>
      </td>
    </tr>
  </table>
              </td>`
    }

    tabela += '</tr>'; // fecha a linha
}

// finaliza a tabela
tabela += '</table>';

// adiciona a tabela no local
document.getElementById('tabela-periodica').innerHTML = tabela;
