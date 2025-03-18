import RolPermiso from "../../models/Rolespermissions.js";

const getAllRolPermisos = async () => {
  try {
    return await RolPermiso.findAll({
      include: ["Rol", "Permiso"] // Incluir datos relacionados
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getAllRolPermisos;