import {Router} from "express";
import AuditoriaController from "../controllers/AuditoriaController.js";

const auditoriaRouter = Router();

auditoriaRouter.get('/',AuditoriaController.getAllAuditoria);
auditoriaRouter.post('/',AuditoriaController.createAuditoria);


export default auditoriaRouter