import RolPermiso from "../../models/Rolespermissions.js";
import Rol from "../../models/Roles.js";
import Permiso from "../../models/Permissions.js";

const createRolPermiso = async (rolPermisoData) => {
  try {
    // Verificar existencia de rol y permiso
    const rol = await Rol.findByPk(rolPermisoData.id_rol);
    const permiso = await Permiso.findByPk(rolPermisoData.id_permiso);

    if (!rol || !permiso) {
      throw new Error("Rol o Permiso no encontrado");
    }

    // Verificar si ya existe la relación
    const existeRelacion = await RolPermiso.findOne({
      where: {
        id_rol: rolPermisoData.id_rol,
        id_permiso: rolPermisoData.id_permiso
      }
    });

    if (existeRelacion) throw new Error("La relación ya existe");

    return await RolPermiso.create(rolPermisoData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createRolPermiso;