const MonobankService = require('../services/monobank.service')

class MonobankController {
  async getTransactions(req, res, next) {
    try {
      const data = await MonobankService.getTransactions()

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }
}

module.exports = new MonobankController()