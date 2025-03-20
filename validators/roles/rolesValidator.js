import { check } from "express-validator";
import validateResult from "../../helpers/validateHelper.js";


const validateRoles =[

check("name_rol")
.exists().withMessage('El nombre del Rol es requerido')
.notEmpty().withMessage('El nombre de Rol no puede estar vacío'),

check("description")
.exists().withMessage('LA descripción del Rol es requerido')
.notEmpty().withMessage('La descripción de Rol no puede estar vacío'),

(req, res, next) => {
    validateResult(req, res, next);
  }
]

export default validateRoles;