import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

import User from "./User.js";

const Auditoria = dbSchema.define('Auditoria', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User, // Referencia al modelo User
            key: 'id',   // Clave primaria del modelo User
        }
    },
    accion: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    fecha: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'auditoria',
    timestamps: false,
});

// Definir la relación con el modelo User
Auditoria.belongsTo(User, { foreignKey: 'id_usuario' });

export default Auditoria;