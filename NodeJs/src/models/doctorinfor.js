'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorInfor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorInfor.init({
    doctorId: DataTypes.INTEGER,
    priceId : DataTypes.INTEGER,   
    provinceId: DataTypes.INTEGER,
    paymentId: DataTypes.INTEGER,
    addressDoctorInfor: DataTypes.STRING,
    nameDoctorInfor : DataTypes.STRING,   
    note: DataTypes.TEXT,
    count: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'DoctorInfor',
  });
  return DoctorInfor;
};