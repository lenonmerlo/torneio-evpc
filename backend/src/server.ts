/// <reference path="./types/index.d.ts" />

import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Application } from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import swaggerDocument from './swagger/swagger.json';

const app: Application = express();
const PORT = process.env.PORT || 3333;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Swagger - documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rotas principais da API
app.use('/api', routes);

// Start do servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em:     http://localhost:${PORT}`);
  console.log(`📚 Documentação Swagger:   http://localhost:${PORT}/api-docs`);
});
