import Rol from "../../models/Roles.js";

const createRole = async(userData)=>{
    try {
        return await Rol.create(userData)
    } catch (error) {
        console.log(error);

        // Manejar el error de violación de restricción única
        if (error.name === 'SequelizeUniqueConstraintError') {
          throw new Error('El nombre del Rol ya está en uso');
        }
    
        // Relanzar otros errores
        throw error;
    }
}

export default createRole;