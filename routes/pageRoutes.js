
//require
const express = require('express');
const { showHomePage, showShopPage, showHomeTwoPage, showSingleProductPage } = require('../controllers/pageControllers');


//init router
const router = express.Router();

//routing
router.get('/', showHomePage)
router.get('/index-2', showHomeTwoPage)
router.get('/shop-3col', showShopPage)
router.get('/shop/:id', showSingleProductPage)

//export
module.exports = router;