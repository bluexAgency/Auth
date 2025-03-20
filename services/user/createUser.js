import User from "../../models/User.js";

const create = async(userData)=>{
    try {
        return await User.create(userData)  
    } catch (error) {
        console.log(error);

        // Manejar el error de violación de restricción única
        if (error.name === 'SequelizeUniqueConstraintError') {
          throw new Error('El nombre de usuario ya está en uso');
        }
    
        // Relanzar otros errores
        throw error;
    }
   
}

export default create