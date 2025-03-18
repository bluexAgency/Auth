import MenuPermiso from "../../models/MenuPermiso.js";

const deleteMenuPermiso = async (id) => {
  try {
    const relacion = await MenuPermiso.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");

    await relacion.destroy();
    return { message: "Relación eliminada" };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteMenuPermiso;