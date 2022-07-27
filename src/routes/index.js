
const express = require('express')

//importando as rotas
const PageController = require('../controllers/pageController')
const SearchController = require('../controllers/searchController')

const router = express.Router();

//rotas convencionais
router.get('/', PageController.home);
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes)


//rota da busca
router.get('/search', SearchController.search)


module.exports = router;