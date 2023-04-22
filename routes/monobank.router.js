const {Router} = require('express')
const MonobankController = require('../controllers/monobank.controller')

const router = Router()

router.get('/transaction', MonobankController.getTransaction)

module.exports = router