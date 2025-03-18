import createRolPermiso from "../services/rolPermiso/createRolPermiso.js";
import getAllRolPermisos from "../services/rolPermiso/getAllRolPermisos.js";
import updateRolPermiso from "../services/rolPermiso/updateRolPermiso.js";
import deleteRolPermiso from "../services/rolPermiso/deleteRolPermiso.js";

class RolPermisoController {
  async createRolPermiso(req, res) {
    try {
      const nuevaRelacion = await createRolPermiso(req.body);
      res.status(201).json(nuevaRelacion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllRolPermisos(req, res) {
    try {
      const relaciones = await getAllRolPermisos();
      res.json(relaciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateRolPermiso(req, res) {
    try {
      const relacionActualizada = await updateRolPermiso(req.params.id, req.body);
      res.json(relacionActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteRolPermiso(req, res) {
    try {
      await deleteRolPermiso(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new RolPermisoController();