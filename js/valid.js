function btn_enviar(){
  var nome = document.getElementById("nome"); // Atribui à variável nome o conteúdo do item com id = Nome

  if(nome.value != ""){ //Se diferente de vazio
    //Mostrar mensagem com nome
    alert("Obrigado "+ nome.value +", mas esta área está em desenvolvimento.")
  } else {
    //Mostrar mensagem genérica
    alert("Obrigado, mas esta área está em desenvolvimento.")
  }
}
