let section = document.getElementById("resultados-pesquisa");
let input = document.getElementById("input");
let botao = document.getElementById("botao");

botao.addEventListener("click", () => {
  // Captura o valor do input
  let pesquisa = input.value.toLowerCase();

  //Não mostra nenhum dado se não digitar
  if(pesquisa === "") {
    return;
  }

  // Limpa o conteúdo da seção de resultados e da variável resultados
  section.innerHTML = "";
  let resultados = "";

  // Filtra os dados com base no valor da pesquisa
  for (let dado of dados) {
    if (dado.titulo.toLowerCase().includes(pesquisa)) {
      resultados += `
    <div class="item-resultado">
      <h2>${dado.titulo}</h2>
      <img src="${dado.imagem}" alt="imagem da pessoa" width="300" height="300">
      <p class="descricao-meta">${dado.descricao}</p>
      <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais informações</a>
    </div>`;
    }
  }
  // Exibe o resultado da pesquisa ou uma mensagem caso nada seja encontrado
  if (resultados) {
    section.innerHTML = resultados;
  } else {
    section.innerHTML = "<p>Nenhuma informação encontrada.<p>";
  }

  //Limpa o input após a pesquisa
  input.value = "";
});

section.innerHTML = resultados;
