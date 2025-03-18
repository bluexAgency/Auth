import UsuarioRol from "../../models/UserRoles.js";


const deleteUserRol = async(id)=>{
    try {
      const userRol = await UsuarioRol.findByPk(id)
      if (!userRol) throw new Error("Relación no encontrada");
      
      await userRol.destroy()
      return { message: "Relación eliminada" };
    } catch (error) {
        console.log(error)
    }
}

export default deleteUserRol