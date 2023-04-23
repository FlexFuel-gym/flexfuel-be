const NodeCache = require('node-cache')
const request = require("request-promise");
const cache = new NodeCache()

class MonobankService {
  async getTransaction(transactionId) {
    const cacheKey = 'transactions';

    if (!cache.has(cacheKey)) {
      const fourWeeksOnMilliseconds = 1000 * 60 * 60 * 24 * 7 * 4

      const toTime = new Date().getTime()
      const fromTime = new Date(toTime - fourWeeksOnMilliseconds).getTime()

      console.log('New monobank request...')
      console.log(`Transactions from: ${fromTime}, to: ${toTime}`)

      const response = await request.get({
        uri: process.env.MONOBANK_LINK + `/${fromTime}/${toTime}`,
        headers: {
          'X-Token': process.env.MONOBANK_X_TOKEN
        }
      })

      cache.set(cacheKey, response, 60)
    }

    const transaction = JSON.parse(cache.get(cacheKey)).find(transaction => {
      if (!transaction.comment) {
        return false;
      }
      return transaction.comment?.trim() === transactionId && transaction.amount >= 1000;
    })

    if (!transaction) {
      throw Error('Платіж не здійснено, спробуйте ще раз через 1 хвилину')
    }

    return {transaction}
  }
}

module.exports = new MonobankService()
