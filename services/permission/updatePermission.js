import Permiso from "../../models/Permissions.js";

const updatePermission = async(id,permiData)=>{
    try {
        const permission = await Permiso.findByPk(id)
        if(!permission)throw new Error('Usuario no encontrado')
        await permission.update(permiData)
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

export default updatePermission