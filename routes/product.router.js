const {Router} = require('express')
const ProductController = require('../controllers/product.controller')

const router = Router()

router.get('/products', ProductController.getProducts)
router.get('/product', ProductController.getProduct)
router.post('/buy-product', ProductController.buyProduct)

module.exports = router