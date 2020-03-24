const express = require('express'); //VARIÁVEL QUE CHAMA O FRAMEWORK EXPRESS
const cors = require('cors');
const routes = require('./routes');

const app = express(); //CRIA UMA VARIÁVEL QUE TEM COMO VALOR O MÉTODO EXPRESS

app.use(cors());
app.use(express.json()); //faz com que o express converta o objeto json em javascript
app.use(routes);

app.listen(3333); //CRIA UMA ROTA PARA O SERVIDOR USANDO UMA PORTA

/**
 * ROTAS / RECURSOS
 */

/**
 * MÉTODOS HTTP
 *
 * GET: Busca uma informação do backend
 * POST: CRIA UMA INFORMAÇÃO NO BACKEND
 * PUT: ALTERA UMA INFORMAÇÃO DO BACKEND
 * DELETE: DELETA UMA INFORMAÇÃO NO BACKEND
 */
/**
 * TIPOS DE PARÂMETROS
 * Query Params: Parametros nomeados enviados na rota apos o sinal "?" (Filtros, Paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
/**
 *
 */