import createMenuPermiso from "../services/MenuPermiso/createMenuPermiso.js";
import getAllMenuPermisos from "../services/MenuPermiso/getAllMenuPermisos.js";
import updateMenuPermiso from "../services/MenuPermiso/updateMenuPermiso.js";
import deleteMenuPermiso from "../services/MenuPermiso/deleteMenuPermiso.js";

class MenuPermisoController {
  async createMenuPermiso(req, res) {
    try {
      const nuevaRelacion = await createMenuPermiso(req.body);
      res.status(201).json(nuevaRelacion);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getAllMenuPermisos(req, res) {
    try {
      const relaciones = await getAllMenuPermisos();
      res.json(relaciones);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateMenuPermiso(req, res) {
    try {
      const relacionActualizada = await updateMenuPermiso(req.params.id, req.body);
      res.json(relacionActualizada);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async deleteMenuPermiso(req, res) {
    try {
      await deleteMenuPermiso(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}

export default new MenuPermisoController();