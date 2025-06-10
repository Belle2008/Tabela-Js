const container = document.getElementById("tabela");
const tooltip = document.getElementById("tooltip-global");

elementos.forEach(el => {
  const elemento = document.createElement("div");
  elemento.classList.add("elemento");
  elemento.style.gridRowStart = el.linha;
  elemento.style.gridColumnStart = el.coluna;
  elemento.style.backgroundColor = `#${el.corHexCpk}`;
  elemento.dataset.carga = (el.numeroAtomico * 1e-6).toString(); // Carga proporcional ao número atômico
  elemento.dataset.numero = el.numeroAtomico; 
  elemento.innerHTML = `
    <span class="simbolo">${el.simbolo}</span><br>
    <span class="numero-atomico">${el.numeroAtomico}</span>
  `;

  elemento.addEventListener("mouseover", () => {
    tooltip.innerHTML = `
      <div class="tooltip-titulo" style="background-color: #${el.corHexCpk};">
        ${el.nome}
      </div>
      <div class="tooltip-box">
        <div class="tooltip-info-esq" style="background-color: #${el.corHexCpk};">
          <div class="simbolo-big">${el.simbolo}</div>
          <div>${el.nome}</div>
          <div>${el.numeroAtomico}</div>
          <div>${el.massaAtomica}</div>
        </div>
        <div class="tooltip-info-dir">
          <table>
            <tr><td>Símbolo</td><td>${el.simbolo}</td></tr>
            <tr><td>Nº atômico</td><td>${el.numeroAtomico}</td></tr>
            <tr><td>Massa</td><td>${parseFloat(el.massaAtomica).toFixed(3)}</td></tr>
            <tr><td>Config. eletrônica</td><td>${el.configuracaoEletronica}</td></tr>
          </table>
        </div>
      </div>
    `;
    tooltip.style.display = "block";
  });

  elemento.addEventListener("mouseout", () => {
    tooltip.style.display = "none";
  });

  container.appendChild(elemento);
});

const k = 8.99e9; // Constante eletrostática em N·m²/C²
let selecionados = [];

document.querySelectorAll('.elemento').forEach(el => {
  el.addEventListener('click', () => {
    if (selecionados.includes(el)) return;

    el.classList.add('selecionado');
    selecionados.push(el);

    const simbolo = el.querySelector(".simbolo")?.textContent || "";
    const numero = el.querySelector(".numero-atomico")?.textContent || "";
    const fundo = el.style.backgroundColor;

    if (selecionados.length === 1) {
      const box1 = document.getElementById("calculo-1");
      box1.innerHTML = `<strong>${simbolo}</strong><br><small>Nº ${numero}</small>`;
      box1.style.backgroundColor = fundo;
    } else if (selecionados.length === 2) {
      const box2 = document.getElementById("calculo-2");
      box2.innerHTML = `<strong>${simbolo}</strong><br><small>Nº ${numero}</small>`;
      box2.style.backgroundColor = fundo;
      setTimeout(() => {
        calcularInteracao(selecionados[0], selecionados[1]);
      }, 300);
    }
  });
});

//*Isa Js*//
function calcularInteracao(el1, el2) {
  const carga1 = parseFloat(el1.dataset.carga);
  const carga2 = parseFloat(el2.dataset.carga);
  const distancia = 1;

  const forca = k * (carga1 * carga2) / (distancia * distancia);
  const tipo = forca > 0 ? 'Repulsão' : 'Atração';

  alert(
    `Interação entre:\n` +
    `  ${el1.querySelector('.simbolo').textContent} (Nº ${el1.dataset.numero})\n` +
    `  ${el2.querySelector('.simbolo').textContent} (Nº ${el2.dataset.numero})\n\n` +
    `Cargas:\n` +
    `  ${carga1} C\n` +
    `  ${carga2} C\n\n` +
    `Força:\n` +
    `  ${Math.abs(forca).toExponential(2)} N\n\n` +
    `Tipo:\n` +
    `  ${tipo}`
  );

  selecionados.forEach(el => el.classList.remove('selecionado'));
  selecionados = [];

  const box1 = document.getElementById("calculo-1");
  const box2 = document.getElementById("calculo-2");

  box1.innerHTML = "";
  box2.innerHTML = "";
  box1.style.backgroundColor = "#eee";
  box2.style.backgroundColor = "#eee";
}
