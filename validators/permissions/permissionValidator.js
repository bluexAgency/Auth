import { check } from "express-validator";
import validateResult from "../../helpers/validateHelper.js";

const validatePermission = [

    check("name_permissions")
    .exists().withMessage('El nombre del Permiso es requerido')
    .not().isEmpty().withMessage('El nombre de Permiso no puede estar vacío') ,// Verifica que no esté vacío
    
    check("description")
    .exists().withMessage('La descripción del Permiso es requerido')
    .not().isEmpty().withMessage('El nombre de Permiso no puede estar vacío') ,// Verifica que no esté vacío

    
    (req, res, next) => {
        validateResult(req, res, next);
      }
    ]


export default validatePermission