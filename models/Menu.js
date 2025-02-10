import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";


const Menu = dbSchema.define('Menu', {
    id_menu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    id_menu_padre: {
        type: DataTypes.INTEGER,
        allowNull: true, // Puede ser null si es un menú raíz
    },
    ruta: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
}, {
    tableName: 'menu',
    timestamps: false,
});

// Definir la relación recursiva
Menu.belongsTo(Menu, { as: 'padre', foreignKey: 'id_menu_padre' });

export default Menu
