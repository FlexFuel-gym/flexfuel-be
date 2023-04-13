const CoachService = require('../services/coach.service')

class CoachController {
  async getCoaches(req, res, next) {
    try {
      const data = await CoachService.getCoaches()

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }

  async registerToCoach(req, res, next) {
    try {
      const {coachId, customerData} = req.body
      const data = await CoachService.registerToCoach(coachId, customerData)

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }
}

module.exports = new CoachController()