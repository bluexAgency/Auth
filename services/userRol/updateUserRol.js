import UsuarioRol from "../../models/UserRoles.js";
import User from "../../models/User.js";
import Rol from "../../models/Roles.js";

const updateUserRol = async (id, newData) => {
  try {
    // Buscar la relación existente
    const userRol = await UsuarioRol.findByPk(id);
    if (!userRol) throw new Error("Relación no encontrada");

    // Verificar si se actualiza el usuario y si existe
    if (newData.id_usuario) {
      const user = await User.findByPk(newData.id_usuario);
      if (!user) throw new Error("Nuevo usuario no encontrado");
    }

    // Verificar si se actualiza el rol y si existe
    if (newData.id_rol) {
      const rol = await Rol.findByPk(newData.id_rol);
      if (!rol) throw new Error("Nuevo rol no encontrado");
    }

    // Actualizar la relación
    await userRol.update(newData);
    return userRol;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateUserRol;