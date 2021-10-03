import BotaoConclui from "./components/concluiTarefa.js" //Importação do módulo concluiTarefa
import BotaoDeleta from "./components/deletaTarefa.js"   

  const criarTarefa = (evento) => {
  
  evento.preventDefault()

  const lista = document.querySelector('[data-list]') // Linha 23 do HTML
  const input = document.querySelector('[data-form-input]') // Linha 19, pega o Input
  const valor = input.value // const valor é o value do Input
  
  const tarefa = document.createElement('li') // aqui o elemento li é criado
  tarefa.classList.add('task')  // a tarefa ganha a class do css de nome task, linha 118 do arquivo css

  const conteudo = `<p class='content'>${valor}</p>` // O conteudo é um parágrafo com o valor, linha 10 deste arquivo

  tarefa.innerHTML = conteudo  // na li é adicionado o conteudo da variável da linha 12

  tarefa.appendChild(BotaoConclui()) // adiciona a função BotaoConclui()
  tarefa.appendChild(BotaoDeleta()) // adiciona a função BotaoDeleta()
  lista.appendChild(tarefa)  // cria um elemento filho da li que é a tarefa
  input.value = ' ' // após adicionar a tarefa o campo do input é zerado

}

const novaTarefa = document.querySelector('[data-form-button]') // novaTarefa pega o seletor data-form-button

novaTarefa.addEventListener('click', criarTarefa) // novaTarefa escuta o evento de click e ao escutar executa o criarTarefa