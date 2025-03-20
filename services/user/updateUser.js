import User from "../../models/User.js";

const update = async (id, userData) => {
  try {
    const user = await User.findByPk(id);
    if (!user) throw new Error('Usuario no encontrado');

    // Actualizar el usuario
    return await user.update(userData);
  } catch (error) {
    console.log(error);

    // Manejar el error de violación de restricción única
    if (error.name === 'SequelizeUniqueConstraintError') {
      throw new Error('El nombre de usuario ya está en uso');
    }

    // Relanzar otros errores
    throw error;
  }
};

export default update;