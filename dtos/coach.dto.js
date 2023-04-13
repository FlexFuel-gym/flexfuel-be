module.exports = class CoachDto {
  id;
  image;
  fullName;
  description;
  schedule;

  constructor(model) {
    this.id = model._id;
    this.image = model.image;
    this.fullName = model.fullName
    this.description = model.description
    this.pricePerLesson = model.pricePerLesson
    this.schedule = model.schedule.map(item => ({
      periodOfTime: item.periodOfTime,
      isAvailable: item.isAvailable
    }))
  }
}