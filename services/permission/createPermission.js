import Permiso from "../../models/Permissions.js";

const createPermission =async(permiData)=>{
    try {
        return await Permiso.create(permiData)
    } catch (error) {
        console.log(error);

        // Manejar el error de violación de restricción única
        if (error.name === 'SequelizeUniqueConstraintError') {
          throw new Error('El nombre del Permiso ya está en uso');
        }
    
        // Relanzar otros errores
        throw error;
    }
}

export default createPermission