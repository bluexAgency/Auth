import UsuarioRol from "../../models/UserRoles.js";
import User from "../../models/User.js";
import Rol from "../../models/Roles.js";

const createUserRol = async(userRolData)=>{
    try {
      const user = await User.findByPk(userRolData.id_usuario);
      const rol = await Rol.findByPk(userRolData.id_rol);

      if (!user || !rol) {
        throw new Error("Usuario o Rol no encontrado");
      }

      return await UsuarioRol.create(userRolData);

    } catch (error) {
        console.log(error)
    }
}

export default createUserRol