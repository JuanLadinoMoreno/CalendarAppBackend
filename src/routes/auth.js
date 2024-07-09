/*
RUTAS DE AUTH
host + /api/auth


const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarJWT } = require('../middlewares/validar-jwt');
*/

import {Router} from "express"; 
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import { crearUsuario, loginUsuario, revalidarToken } from "../controllers/auth.js";
import { validarJWT } from "../middlewares/validar-jwt.js";


const router = Router();


router.post(
    '/new', 
    [ // middlewares
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario 
);

router.post(
    '/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario 
);


router.get('/renew', validarJWT ,revalidarToken );

export default router