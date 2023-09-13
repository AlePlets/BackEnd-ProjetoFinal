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