import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

const Permiso = dbSchema.define('Permissions', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name_permissions: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.STRING(255),
        allowNull: true,
    },
}, {
    timestamps: false,
});


export default Permiso