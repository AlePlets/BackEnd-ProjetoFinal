# BackEnd-ProjetoFinal
Repositório para desenvolvimento do Projeto Final do curso de Back-End da CoderHouse.

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
