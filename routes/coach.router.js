const {Router} = require('express')
const CoachController = require('../controllers/coach.controller')

const router = Router()

router.get('/get-coaches', CoachController.getCoaches)

module.exports = router