import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

import Rol from "./Roles.js";
import Permiso from "./Permissions.js";     

const RolPermiso = dbSchema.define('RolesPermission', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {

    timestamps: false,
});

// Definir relaciones
RolPermiso.belongsTo(Rol, { foreignKey: 'id_rol' });
RolPermiso.belongsTo(Permiso, { foreignKey: 'id_permiso' });

export default RolPermiso