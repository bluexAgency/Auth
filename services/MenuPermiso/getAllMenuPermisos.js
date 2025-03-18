import MenuPermiso from "../../models/MenuPermiso.js";

const getAllMenuPermisos = async () => {
  try {
    return await MenuPermiso.findAll({
      include: ["Menu", "Permiso"] // Incluir datos relacionados
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default getAllMenuPermisos;