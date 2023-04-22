const MonobankService = require('../services/monobank.service')

class MonobankController {
  async getTransaction(req, res, next) {
    try {
      const {'transaction-id': transactionId} = req.query
      const data = await MonobankService.getTransaction(transactionId)

      res.status(200).send({data, success: true})
    } catch (e) {
      console.log('Error: ', e)
      res.status(400).send({error: {message: e.message}, success: false})
    }
  }
}

module.exports = new MonobankController()