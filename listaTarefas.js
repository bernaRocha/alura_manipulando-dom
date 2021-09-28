const criarTarefa = (evento) => {
  
  evento.preventDefault()

  const lista = document.querySelector('[data-list]')
  const input = document.querySelector('[data-form-input]')
  const valor = input.value
  
  const tarefa = document.createElement('li') // aqui o elemento li é criado
  tarefa.classList.add('task')  // a tarefa ganha a class do css de nome task

  const conteudo = `<p class='content'>${valor}</p>`

  tarefa.innerHTML = conteudo  // na li é adicionado o conteudo da variável da linha 12

  tarefa.appendChild(botaoConclui())
  lista.appendChild(tarefa)  // cria um elemento filho da li que é a tarefa
  input.value = ' ' // após adicionar a tarefa o campo do input é zerado

}

const novaTarefa = document.querySelector('[data-form-button]') // novaTarefa pega o seletor data-form-button

novaTarefa.addEventListener('click', criarTarefa) // novaTarefa escuta o evento de click e ao escutar executa o criarTarefa

const botaoConclui = () => {
    const botaoConclui = document.createElement('button')

    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir' //representa o conteúdo a ser renderizado
    botaoConclui.addEventListener('click', () => {
      console.log('fui clicado') 
    })
    
    return botaoConclui
}