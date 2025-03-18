import getAllUserRoles from "../services/userRol/getAllUserRoles.js";
import createUserRol from "../services/userRol/createUserRol.js";
import deleteUserRol from "../services/userRol/deleteUserRol.js";
import updateUserRol from "../services/userRol/updateUserRol.js";

class UserRolController{

async getAllUserRoles(req,res){
    try {
        const userRoles = await getAllUserRoles()
        res.json(userRoles)
    } catch (error) {
    res.status(500).json({ error: error.message });  
    }
}


async createUserRol(req, res) {
    try {
      const newUserRol = await createUserRol(req.body);
      res.status(201).json(newUserRol);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }


  async updateUserRol(req, res) {
    try {
      const updatedUserRol = await updateUserRol(req.params.id, req.body);
      res.json(updatedUserRol);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

async deleteUserRol(req, res) {
  try {
    await deleteUserRol(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

}

export default new UserRolController();