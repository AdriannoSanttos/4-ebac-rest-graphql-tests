const { spec, request } = require('pactum');

request.setBaseUrl('http://lojaebac.ebaconline.art.br');

let token;

describe('Contrato API - Categorias', () => {

  before(async () => {
    token = await spec()
      .post('/public/authUser')
      .withJson({
        email: 'admin@admin.com',
        password: 'admin123'
      })
      .returns('data.token');
  });

  it('Deve validar o contrato de sucesso ao criar categoria', async () => {
    await spec()
      .post('/api/addCategory')
      .withHeaders('Authorization', token)
      .withJson({
        name: 'Categoria Contrato'
      })
      .expectStatus(200)
      .expectJsonSchema({
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          message: { type: 'string' },
          data: {
            type: 'object',
            properties: {
              _id: { type: 'string' },
              name: { type: 'string' },
              createdAt: { type: 'string' },
              updatedAt: { type: 'string' }
            },
            required: ['_id', 'name']
          }
        },
        required: ['success', 'data']
      });
  });

});
