import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

import  User from "./User.js";
import Rol from "./Roles.js";

const UsuarioRol = dbSchema.define('UserRoles', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
 
    timestamps: false,
});

// Definir relaciones
UsuarioRol.belongsTo(User, { foreignKey: 'id_usuario' });
UsuarioRol.belongsTo(Rol, { foreignKey: 'id_rol' });



export default UsuarioRol
