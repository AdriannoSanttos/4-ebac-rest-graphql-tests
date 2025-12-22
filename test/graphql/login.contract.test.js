const { spec, request } = require('pactum');

request.setBaseUrl('http://lojaebac.ebaconline.art.br');

describe('Contrato GraphQL - Login', () => {

  it('Deve validar o contrato da mutation authUser', async () => {
    await spec()
      .post('/graphql')
      .withGraphQLQuery(`
        mutation AuthUser($email: String!, $password: String!) {
          authUser(email: $email, password: $password) {
            token
          }
        }
      `)
      .withGraphQLVariables({
        email: 'admin@admin.com',
        password: 'admin123'
      })
      .expectStatus(200)
      .expectJsonSchema({
        type: 'object',
        properties: {
          data: {
            type: 'object',
            properties: {
              authUser: {
                type: 'object',
                properties: {
                  token: { type: 'string' }
                },
                required: ['token']
              }
            }
          }
        }
      });
  });

});
