import RolPermiso from "../../models/Rolespermissions.js";

const deleteRolPermiso = async (id) => {
  try {
    const relacion = await RolPermiso.findByPk(id);
    if (!relacion) throw new Error("Relación no encontrada");

    await relacion.destroy();
    return { message: "Relación eliminada" };
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteRolPermiso;