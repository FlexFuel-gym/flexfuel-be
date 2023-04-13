module.exports = class CoachOrderDto {
  id;
  coachId;
  customerId;

  constructor(model) {
    this.id = model._id;
    this.coachId = model.coachId;
    this.customerId = model.customerId;
  }
}