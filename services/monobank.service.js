const NodeCache = require('node-cache')
const request = require("request-promise");
const cache = new NodeCache()

class MonobankService {
  async getTransactions() {
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

    return {
      transactions: JSON.parse(cache.get(cacheKey))
    }
  }
}

module.exports = new MonobankService()
