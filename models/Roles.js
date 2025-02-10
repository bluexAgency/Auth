import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

const Rol = dbSchema.define('Roles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_rol: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    
    timestamps: false,
});


export default Rol
