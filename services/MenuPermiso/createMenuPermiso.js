import MenuPermiso from "../../models/MenuPermiso.js";
import Menu from "../../models/Menu.js";
import Permiso from "../../models/Permissions.js";

const createMenuPermiso = async (menuPermisoData) => {
  try {
    // Verificar existencia de menú y permiso
    const menu = await Menu.findByPk(menuPermisoData.id_menu);
    const permiso = await Permiso.findByPk(menuPermisoData.id_permiso);

    if (!menu || !permiso) {
      throw new Error("Menú o Permiso no encontrado");
    }

    // Verificar si ya existe la relación
    const existeRelacion = await MenuPermiso.findOne({
      where: {
        id_menu: menuPermisoData.id_menu,
        id_permiso: menuPermisoData.id_permiso
      }
    });

    if (existeRelacion) throw new Error("La relación ya existe");

    return await MenuPermiso.create(menuPermisoData);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default createMenuPermiso;