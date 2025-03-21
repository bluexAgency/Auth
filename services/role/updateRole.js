import Rol from "../../models/Roles.js";


const updateRoles = async(id, userData)=>{
    try {
        const roles = await Rol.findByPk(id)
        if(!roles)throw new Error('Usuario no encontrado')
        return await roles.update(userData)

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

export default updateRoles



