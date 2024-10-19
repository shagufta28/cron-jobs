const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'Cron Job API',
      version: '1.0.0',
      description: 'API documentation for managing cron jobs and webhooks',
      contact: {
        name: 'Your Name',
        email: 'youremail@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000', // Replace with your server URL
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to your API docs
};

// Initialize swagger-jsdoc
const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Function to set up Swagger
const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

module.exports = setupSwagger;
