const {Router} = require('express')
const CoachController = require('../controllers/coach.controller')

const router = Router()

router.get('/get-coaches', CoachController.getCoaches)
router.post('/register-to-coach', CoachController.registerToCoach)

module.exports = router