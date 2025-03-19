import { check } from "express-validator";
import validateResult from "../helpers/validateHelper.js";
import User from "../models/User.js"; // Asegúrate de importar tu modelo de usuario

// Validador personalizado para verificar si el username ya existe
const checkUsernameExists = async (username) => {
  const user = await User.findOne({ where: { username } }); // Busca el usuario en la base de datos
  if (user) {
    throw new Error('El nombre de usuario ya está en uso');
  }
};

const validateCreate = [
  // Validación para el campo 'username'
  check('username')
    .exists().withMessage('El nombre de usuario es requerido') // Verifica que el campo exista
    .not().isEmpty().withMessage('El nombre de usuario no puede estar vacío') // Verifica que no esté vacío
    .custom(checkUsernameExists), // Valida que el username no exista en la base de datos

  // Validación para el campo 'password'
  check('password')
    .exists().withMessage('La contraseña es requerida') // Verifica que el campo exista
    .not().isEmpty().withMessage('La contraseña no puede estar vacía') // Verifica que no esté vacía
    .isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres') // Longitud mínima de 8 caracteres
    .matches(/\d/).withMessage('La contraseña debe contener al menos un número') // Debe contener al menos un número
    .matches(/[A-Z]/).withMessage('La contraseña debe contener al menos una letra mayúscula') // Debe contener al menos una mayúscula
    .matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage('La contraseña debe contener al menos un carácter especial'), // Debe contener al menos un carácter especial

  // Validación para el campo 'email'
  check('email')
    .exists().withMessage('El correo electrónico es requerido') // Verifica que el campo exista
    .not().isEmpty().withMessage('El correo electrónico no puede estar vacío') // Verifica que no esté vacío
    .isEmail().withMessage('El correo electrónico debe ser válido') // Verifica que sea un email válido
    .normalizeEmail(), // Normaliza el correo electrónico

  // Middleware para manejar los resultados de la validación
  (req, res, next) => {
    validateResult(req, res, next);
  }
];

export default validateCreate;