
module.exports = function(app){
		var listaProdutos = function(req,res,next){
			var connection = app.infra.connectionFactory();
			var produtosDAO = new app.infra.ProdutoDAO(connection);
			produtosDAO.lista(function(err, results){
				if(err){
						return next(err);
				}
				res.format({
						html: function(){
							res.render('produtos/lista', {lista:results});
						},
						json: function(){
							res.json(results);
						}
				})

			});
			connection.end();
		}

	app.get('/produtos', listaProdutos);

	app.get('/produtos/form', function(req,res){
		res.render('produtos/form',
			{errosValidacao:{},produto:{}});
	});

	app.post('/produtos', function(req,res){

		var produto = req.body;

		req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
		req.assert('preco', 'Formato inválido').isFloat();

		var erros = req.validationErrors();
		if(erros){
			res.format({
					html: function(){
						res.status(400).render('produtos/form',{errosValidacao:erros, produto:produto});
					},
					json: function(){
						res.status(400).json(erros);
					}
			})
		}

		var connection = app.infra.connectionFactory();
			var produtosDAO = new app.infra.ProdutoDAO(connection);
				produtosDAO.salva(produto, function(err, results){
					res.redirect('/produtos');
				});
			});
}
