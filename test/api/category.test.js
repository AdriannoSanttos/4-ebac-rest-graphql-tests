const { spec, request } = require('pactum');
const { like } = require('pactum-matchers');

request.setBaseUrl('http://lojaebac.ebaconline.art.br');

let token;
let categoryId;

beforeEach(async () => {
  // Gera token antes de cada teste
  token = await spec()
    .post('/public/authUser')
    .withJson({
      email: 'admin@admin.com',
      password: 'admin123'
    })
    .returns('data.token');
});

describe('API - Categorias', () => {

  it('Deve adicionar uma nova categoria', async () => {
    categoryId = await spec()
      .post('/api/addCategory')
      .withHeaders('Authorization', token)
      .withJson({
        name: 'Categoria Teste',
        photo: 'categoria.jpg'
      })
      .expectStatus(200)
      .expectJsonMatch({
        message: like('Categoria criada com sucesso')
      })
      .returns('data._id'); // salva o ID da categoria
  });

  it('Deve editar a categoria criada', async () => {
    await spec()
      .put(`/api/editCategory/${categoryId}`)
      .withHeaders('Authorization', token)
      .withJson({
        name: 'Categoria Editada',
        photo: 'categoria_editada.jpg'
      })
      .expectStatus(200)
      .expectJsonMatch({
        message: like('Categoria atualizada com sucesso')
      });
  });

  it('Deve deletar a categoria criada', async () => {
    await spec()
      .delete(`/api/deleteCategory/${categoryId}`)
      .withHeaders('Authorization', token)
      .expectStatus(200)
      .expectJsonMatch({
        message: like('Categoria deletada com sucesso')
      });
  });

});
