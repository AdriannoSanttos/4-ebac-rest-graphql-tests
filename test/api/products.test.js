const { spec, request } = require('pactum');

request.setBaseUrl('http://lojaebac.ebaconline.art.br');

let token;
const fakeProductId = '1234567890abcdef12345678';

before(async () => {
  token = await spec()
    .post('/public/authUser')
    .withJson({
      email: 'admin@admin.com',
      password: 'admin123'
    })
    .returns('data.token');
});

it('Deve retornar erro ao tentar adicionar um novo produto (API com falha)', async () => {
  await spec()
    .post('/api/addProduct')
    .withHeaders('Authorization', token)
    .withJson({
      name: 'Produto Teste API',
      price: 199.99,
      quantity: 5,
      categories: ['Categoria Teste'],
      photos: ['produto.jpg']
    })
    .expectStatus(500)
    .expectJsonLike({
      success: false
    });
});

it('Deve retornar erro 400 ao tentar editar um produto inexistente', async () => {
  await spec()
    .put(`/api/editProduct/${fakeProductId}`)
    .withHeaders('Authorization', token)
    .withJson({
      name: 'Produto Editado',
      price: 299.99,
      quantity: 10
    })
    .expectStatus(400)
    .expectJsonLike({
      success: false,
      error: 'invalid product'
    });
});

it('Deve retornar erro 400 ao tentar deletar um produto inexistente', async () => {
  await spec()
    .delete(`/api/deleteProduct/${fakeProductId}`)
    .withHeaders('Authorization', token)
    .withJson({
      authorization: token
    })
    .expectStatus(400)
    .expectJsonLike({
      success: false,
      error: 'invalid product'
    });
});
