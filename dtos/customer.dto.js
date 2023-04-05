module.exports = class ProductDto {
  id;
  fullName;
  phoneNumber;
  deliveryCompany;
  deliveryCityRef;
  deliveryWarehouse;

  constructor(model) {
    this.id = model._id;
    this.fullName = model.fullName
    this.phoneNumber = model.phoneNumber
    this.deliveryCompany = model.deliveryCompany
    this.deliveryCityRef = model.deliveryCityRef
    this.deliveryWarehouse = model.deliveryWarehouse
  }
}