/*
    Event Routes
    /api/events
*/
// const { Router } = require('express');
// const { check } = require('express-validator');


// const { isDate } = require('../helpers/isDate');
// const { validarCampos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');
// const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require('../controllers/events');
import { Router } from "express";
import { check } from "express-validator";

import { isDate } from "../helpers/isDate.js";
import { validarCampos } from "../middlewares/validar-campos.js";
import { validarJWT } from "../middlewares/validar-jwt.js";
import { getEventos, crearEvento, actualizarEvento, eliminarEvento } from "../controllers/events.js";





const router = Router();

// Todas tienes que pasar por la validación del JWT
router.use( validarJWT );


// Obtener eventos 
router.get('/', getEventos );

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento 
);

// Actualizar Evento
router.put(
    '/:id', 
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom( isDate ),
        check('end','Fecha de finalización es obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento 
);

// Borrar evento
router.delete('/:id', eliminarEvento );

export default router