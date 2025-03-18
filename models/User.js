import { DataTypes } from "sequelize";
import dbSchema from "../config/db.js";
import Rol from "./Roles.js"   
import PasswordHistory from "./PasswordHistory.js";

const User = dbSchema.define('User',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    },
 
    

});

User.belongsTo(Rol, { foreignKey: 'id_rol' });
User.hasMany(PasswordHistory, { foreignKey: "userId" });
PasswordHistory.belongsTo(User, { foreignKey: "userId" });

export default User;