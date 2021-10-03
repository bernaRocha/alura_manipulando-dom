const BotaoConclui = () => {
  const botaoConclui = document.createElement('button')

  botaoConclui.classList.add('check-button')
  botaoConclui.innerText = 'concluir' //representa o conteúdo a ser renderizado
  botaoConclui.addEventListener('click', concluiTarefa)
  
  return botaoConclui
}

const concluiTarefa = (evento) => { // Começa com maiúscula porque é um componente

  const botaoConclui = evento.target

  const tarefaCompleta = botaoConclui.parentElement 

  tarefaCompleta.classList.toggle('done')
}


export default BotaoConclui