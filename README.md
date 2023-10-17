**E-Commerce - Entrega Final**
**Curso**: Back End
**Site**: https://www.coderhouse.com.br/

> Colaboradores:
>  - https://github.com/AlePlets
>  - https://github.com/Paulo-101
>  - https://github.com/Souzafx

Repositório com código do Back End do projeto de um e-commerce para avaliação final do curso de Back-End.
_____________________________________________________________________________
## Desafio 8
**Controle e Middlewares - 08 03.06.2023**
Folder com arquivos da entrega parcial do desafio final - aula 08

- Servidor com express que roda na porta 8080:

- Product:
  - Id : String / Number
  - Titulo : String
  - Descricao : String
  - Code : String
  - Preco : Numbner
  - Status : Boolean
  - Estoque : Number
  - Categoria : String
  - Thumbnails : [String] (Opcional)

- Guardar em um arquivo products.json (usar o modulo fs)

- Cart:
  - Id : String / Number
  - Products : [ { Produto.id , Quantidade } ]

- Guardar em um arquivo carts.json (usar o modulo fs)

- Rotas:
  - /api/products/ (pid = product id)
    POST "/" : adicionar um novo produto.
    PUT "/:pid" : atualizar um produto (nunca alterar id)
    DELETE "/:pid" : deletar o produto com id indicado.

  - /api/carts/ (cid = cart id)
    POST "/" : cria um novo carrinho com um id (cid) e um array de produtos [ {pid , qtd} ]
    GET "/:cid" : retorna a lista de produtos que pertencem a aquele carrinho.
    POST "/:cid/products/:pid" : adicionar ao carrinho o produto com id = pid, adicionando 1 unidade.
    e caso já exista um produto com esse id no carrinho, ele deve incrementar a quantidade.

    Exemplo const mouse = {id:1, titulo:mouse, descriç}

 

       [ { Produto.id , Quantidade } ]
    
        let produto = 
        {
        id : 1
        titulo : "Mouse"
        descricao : "Mouse Logitech"
        code : "MX-150"
        preco : 75.00
        status : "true" (inicialmente sempre true)
        estoque : 10
        categoria : "Informatica"
        Thumbnails : [
                      "site/endereco/imagem1.png",
                      "site/endereco/imagem2.png",
                      "site/endereco/imagem3.png"
                      ] (opcional)
    		  }
    
    	  let carrinho = 
    	  {
    	    id:10,
    	    listaProdutos: [
    	      {pid:1 , qtd: 2},
    	      {pid:2, qtd: 3}
    	    ]
    	  }
_____________________________________________________________________________
## Desafio 15

<strong> Complementar o trabalho do ecommerce. </strong>

- <b>Adicionando mongoose e mongo</b>
- Criar um banco de dados chamado ecommerce
    -criar as collections "carts", "messages", "products".
    -cada uma com seu schema.

- <b>Pasta DAO para o gerenciador de arquivos e mongoDb.</b>
    - DAO = data access object
    - Dentro da pasta DAO estarão os schemas na pasta models
    - Trocar os serviços para usar o Mongoose ao invés do FileSystem.
    - NÃO EXCLUIR O FILE SYSTEM.

    - <b>Nova view no handlebars chamada chat.handlebars</b>
    - Implementar o chat na view chat.handlbars
    - Para as mensagens, guardar-las na collection "messages" no seguinte formato
    {user:emailDoUsuario, mensagem:mensagem do usuario}

_____________________________________________________________________________
## Desafio 30

**Objetivos gerais**

-   Profissionalizar o servidor
    
**Objetivos específicos**

-   Aplicar uma arquitetura profissional para o nosso servidor
    
-   Aplicar práticas como padrões de design, mailing, variáveis de ambiente. etc

**Deve ser entregue**

-   Modifique nossa camada de persistência para aplicar os conceitos de Factory (opcional), DAO e DTO.
    
-   O DAO selecionado (por um parâmetro de linha de comando como fizemos acima) será retornado por uma Fábrica para a camada de negócios operar. (Fábrica pode ser opcional)

-   Implemente o padrão Repository para trabalhar com o DAO na lógica de negócios.
    
-   Modifique o caminho /current Para evitar o envio de informações confidenciais, envie um DTO do usuário apenas com as informações necessárias.
-  Crie um middleware que possa funcionar em conjunto com a estratégia "current" para criar um sistema de autorização e limitar o acesso a esses endpoints:
    
	-   Somente o administrador pode criar, atualizar e excluir produtos.
	    
	-   Somente o usuário pode enviar mensagens para o chat.
	    
	-   Somente o usuário pode adicionar produtos ao carrinho.

- Crie um modelo de Ticket que terá todas as formalizações da compra. Isso terá os campos

	-   id (gerado automaticamente pelo mongo)
	    
	-   code: String deve ser gerada automaticamente e única
	    
	-   purchase_datetime: Você deve salvar a data e hora exata em que a compra foi formalizada (basicamente é um created_at)
	-  amount: Número, valor total da compra.
	    
	-   purchaser: String, conterá o e-mail do usuário associado ao carrinho.
    

-   Implemente, no router de carts, a rota /:cid/purchase, que permitirá finalizar o processo de compra do carrinho.
    

	-   A compra deve confirmar o estoque do produto no momento da finalização
	-  Se o produto tiver estoque suficiente para a quantidade indicada no produto do carrinho, subtraia do estoque do produto e continue.
	    
	-   Caso o produto não tenha estoque suficiente para a quantidade indicada no produto do carrinho, então não adicione o produto ao processo de compra.
	-  No final, utilize o serviço Ticket para poder gerar um ticket com os dados da compra.
	    
	-   Em caso de compra não finalizada, devolva o combinado com os ids dos produtos que não puderam ser processados.
    
			Concluída a compra, o carrinho associado ao utilizador que
              comprou deverá conter apenas os produtos que não puderam ser
              adquiridos. Ou seja, os que foram comprados são filtrados e os
              que não estavam disponíveis permanecem.

**Formato**

-   Link para o repositório Github com o projeto (sem node_modules)
    
-   Além disso, arquivo .env para poder executar o projeto.


_____________________________________________________________________________
## Desafio 39
# Documentar API
# Objetivo

Realize a configuração necessária para ter seu projeto final documentado no Swagger.

# Aspectos a incluir

O módulo do produto deve ser documentado.
O módulo do carrinho deve ser documentado.
Não documente as sessões
