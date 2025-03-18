import MenuPermiso from "../../models/MenuPermiso.js";
import Menu from "../../models/Menu.js";
import Permiso from "../../models/Permissions.js";

const updateMenuPermiso = async (id, newData) => {
  try {
    const relacion = await MenuPermiso.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");

    // Validar nuevos IDs si se envían
    if (newData.id_menu) {
      const menu = await Menu.findByPk(newData.id_menu);
      if (!menu) throw new Error("Nuevo menú no existe");
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

export default updateMenuPermiso;