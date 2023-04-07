const CoachSchema = require('../schemas/coach.schema')
const CoachDto = require('../dtos/coach.dto')

class CoachService {
  async getCoaches() {
    const coaches = await CoachSchema.find()
    return {
      coaches: coaches.map((coach) => new CoachDto(coach))
    }
  }
}

module.exports = new CoachService()