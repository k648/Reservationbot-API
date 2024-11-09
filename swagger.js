
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: " API for a  chatbot system ",
            version: "1.0.0"
           
        },
        components: {
            securitySchemes: {
              BearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT', 
              },
            },
          },
          security: [
            {
              BearerAuth: [],
            },
          ],
        servers : [
            {
              url: `http://localhost:${ process.env.PORT}/`
            }
          ],
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
module.exports = swaggerDocs;
