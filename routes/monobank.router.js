const {Router} = require('express')
const MonobankController = require('../controllers/monobank.controller')

const router = Router()

router.get('/transactions', MonobankController.getTransactions)

module.exports = router