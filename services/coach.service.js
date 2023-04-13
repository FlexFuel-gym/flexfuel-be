const mongoose = require("mongoose");
const CoachSchema = require('../schemas/coach.schema')
const CoachOrderSchema = require('../schemas/coach-order.schema')
const CoachCustomerSchema = require("../schemas/coach-customer.schema");
const CoachDto = require('../dtos/coach.dto')
const CoachOrderDto = require('../dtos/coach-order.dto')
const CoachCustomerDto = require('../dtos/coach-customer.dto')

class CoachService {
  async getCoaches() {
    const coaches = await CoachSchema.find()
    return {
      coaches: coaches.map((coach) => new CoachDto(coach))
    }
  }

  async registerToCoach(coachId, customerData) {
    const coach = await CoachSchema.findById(coachId)

    console.log(coach)

    const isCoachScheduleIndex = coach.schedule.findIndex((item) =>
      item.periodOfTime === customerData.periodOfTime && item.isAvailable
    )

    if (isCoachScheduleIndex === -1) {
      throw new Error('Тренер не доступний в цей час, перезавантажте сторінку та отримайте актуальну інформацію про графік тренера!')
    }

    coach.schedule[isCoachScheduleIndex].isAvailable = false

    await coach.save()
    const dateTime = new Date().getTime()

    const coachCustomer = await CoachCustomerSchema.create({
      _id: new mongoose.Types.ObjectId(),
      fullName: customerData.fullName,
      phoneNumber: customerData.phoneNumber,
      periodOfTime: customerData.periodOfTime,
      date: new Date(dateTime + 1000 * 60 * 60 * 60).toISOString().split('T')[0],
    })


    const coachOrder = await CoachOrderSchema.create({
      _id: new mongoose.Types.ObjectId(),
      customerId: coachCustomer._id,
      coachId,
    })

    return {
      customer: new CoachCustomerDto(coachCustomer),
      order: new CoachOrderDto(coachOrder)
    }
  }
}

module.exports = new CoachService()