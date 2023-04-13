module.exports = class CoachCustomerDto {
  id;
  date;
  fullName;
  phoneNumber;
  periodOfTime;

  constructor(model) {
    this.id = model._id;
    this.date = model.date;
    this.fullName = model.fullName
    this.phoneNumber = model.phoneNumber
    this.periodOfTime = model.periodOfTime
  }
}