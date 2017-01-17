var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController',function(){
  it('#Listagem JSON', function(done){
        request.get('/produtos')
          .set('Accept','application/json')
          .expect('Content-type',/json/)
          .expect(200, done);
    });

    it('#Cadastrar novo produto com dados válidos', function(done){
        request.post('/produtos')
          .send({titulo:"dddd",descricao:"Novo livro teste", preco:26.99})
          .expect(302, done);
    });

    it('#Cadastrar novo produto com dados inválidos', function(done){
        request.post('/produtos')
          .send({titulo:"",descricao:"Novo livro teste", preco:26.99})
          .expect(400, done);
    });

});
