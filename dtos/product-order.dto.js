module.exports = class ProductOrderDto {
  id;
  productId;
  customerId;

  constructor(model) {
    this.id = model._id;
    this.productId = model.productId
    this.customerId = model.customerId
  }
}