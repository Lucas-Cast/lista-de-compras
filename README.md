# Lista de compras API

## Descrição
API para gerenciar lista de compras integrada com uma página HTML, possui endpoints para ver produtos registrados, adicionar e deletar produtos.

Foi construída com Javascript, Nodejs e MongoDB para persistir os dados.
As dependencias utilizadas foram o express, mongoose, dotenv e swagger-ui-express. 

A aplicação foi criada com o intuito de facilitar uma tarefa corriqueira no meu ambiente particular e dos meus familiares, que é a organização de produtos que precisam ser adquiridos nas compras do mês. 

## Instruções de instalação

```bash
npm install express dotenv swagger-ui-express mongoose
```

## Instruções de uso
Precisa ser criado um arquivo .env na raiz do projeto com duas variáveis distintas DB_USER = usuarioTeste e DB_PASSWORD = iv4h5uix4XCzkx0L
Esses valores correspondem a um usuário especial criado exclusivamente para testar a aplicação 

Utilize o seguinte comando no terminal para startar a API:
```bash
npm start 
```

Após startada, os endpoints da API podem ser visto com especificações definidas com swagger na rota:  
```bash 
http://localhost:3000/api-docs/
```

Por fim, a aplicação também pode ser acessada online no seguinte link:
```bash 
https://listadecompras-one.vercel.app/
```
