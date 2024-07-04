function nikbar(){
    window.location.href="nikbar.html"
}
function ignite(){
    window.location.href="ignite.html"
}
function oxbar(){
     window.location.href="oxbar.html"

}
function waka(){
    window.location.href="waka.html"

}
function lostmary(){
    window.location.href="lostmary.html"

}
function compra1Nikbar(){
    window.location.href="infoCartao.html"
   
               
                  
            }
            function compra1nikbarr(){
                let compra1nikb
                let qtd
                let pagamento
                 qtd =Number(prompt("O preço a vista é de 90$ \n Quantidade Desejada?"))
              
                        alert("Preço total: "+ 90 * qtd)
                       compra1nikb = Number(prompt("Continuar com o Pagamento? Sim(1) Não(2)"))
                        switch(compra1nikb){
                            case 1:
                               pagamento = Number(prompt("Qual será a forma de pagamento? Debito(3) Credito(4)"))
                               break
                               case 2:
                                alert("Pagamento cancelado")
                              break
                                default:
                                    alert("opção inexistente")
                        }
                               switch(pagamento){
                                
                                case 3:
                                  alert("Pagamento concluido com sucesso")
                                    alert("Data: 10/06/2024 \n" +
                        "Transação: 12345 \n"+
                        " ---------------------------------- \n" +
                       " Item: Nikbar \n " +
                        "Quantidade:  "  + qtd + "\n" +
                       " ---------------------------------- \n" +
                        "Pagamento: Debito \n"+
                        "Estabelecimento: Loja de pods\n" +
                        " PREÇO TOTAL $:  " + 90*qtd )
                                    break
                                    case 4:
                                        alert("Pagamento concluido com sucesso")
                                    alert("Data: 10/06/2024 \n" +
                        "Transação: 12345 \n"+
                        " ---------------------------------- \n" +
                       " Item: Nikbar \n " +
                        "Quantidade:  "  + qtd + "\n" +
                       " ---------------------------------- \n" +
                        "Pagamento: Credito \n"+
                        "Estabelecimento: Loja de pods\n" +
                        " PREÇO TOTAL $:  " + 90*qtd )
                                    break
                                    default:
                                        alert("Forma de pagamento invalida!")
                               }
                               window.location.href="index.html"
                                
            }
            function compra2nikbar(){
                window.location.href="infoCartao.html"
            }
            function compra3nikbar(){
                window.location.href="infoCartao.html"
            
            }
           


            












            function verdetalhenik1(){
                alert("Watermelon Candy Ice: Uma combinação de um doce de melancia com um toque ice para quebrar o doce e ser um sabor que te encantará a cada puxada"
+"O Pod Descartável NikBar 5000 Puffs é um cigarro eletrônico descartável, ele tem capacidade de aproximadamente 5000 puxadas.")

            }





