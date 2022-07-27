const express = require('express');
const { pet } = require('../models/pet');
const {createMenuObject} = require('../helpers/createMenuObject')

const search = (req, res) => {
	/*vamos usar o request para pegar o q
	let query vai receber req.query.q que
	vai ser uma string */
	let query = req.query.q;

	/*em seguida pegamos o que o usuário digitou 
	e exibimos a lista, ele vai fazer a filtragem 
	e gerar uma lista com os nomes parecidos dos pets */
	let list = pet.getFromName(query)

	res.render('pages/pages', {
		menu:createMenuObject(''),
		list
	});
}

module.exports.search = search
