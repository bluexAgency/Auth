import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";

import Menu from "./Menu.js"; 
import Permiso from "./Permissions.js";

const MenuPermiso = dbSchema.define('MenuPermiso', {
    id_menu_permiso: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
}, {
    tableName: 'menu_permiso',
    timestamps: false,
});

// Definir las relaciones
MenuPermiso.belongsTo(Menu, { foreignKey: 'id_menu' });
MenuPermiso.belongsTo(Permiso, { foreignKey: 'id_permiso' });

export default MenuPermiso;