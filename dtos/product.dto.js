module.exports = class ProductDto {
  id;
  name;
  description;
  images;
  price;

  constructor(model) {
    this.id = model._id;
    this.name = model.name
    this.description = model.description
    this.images = model.images
    this.price = model.price
  }
}