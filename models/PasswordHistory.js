import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

const PasswordHistory = dbSchema.define('PasswordHistory', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: true, // Para registrar cuándo se guardó la contraseña
});

export default PasswordHistory;