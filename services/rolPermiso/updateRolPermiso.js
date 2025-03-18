import RolPermiso from "../../models/Rolespermissions.js";
import Rol from "../../models/Roles.js";
import Permiso from "../../models/Permissions.js";

const updateRolPermiso = async (id, newData) => {
  try {
    const relacion = await RolPermiso.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");

    // Validar nuevos IDs si se envían
    if (newData.id_rol) {
      const rol = await Rol.findByPk(newData.id_rol);
      if (!rol) throw new Error("Nuevo rol no existe");
    }
    
    if (newData.id_permiso) {
      const permiso = await Permiso.findByPk(newData.id_permiso);
      if (!permiso) throw new Error("Nuevo permiso no existe");
    }

    await relacion.update(newData);
    return relacion;
  } catch (error) {
    throw new Error(error.message);
  }
};

export default updateRolPermiso;