import { Router } from 'express'

import {
    getAllJoyasControllersById,
    getAllJoyasControllersFiltered,
    getAllJoyasControllersFormat,
    notFound,
} from '../controllers/joyas.controlles.js'

const router = Router()

router.get('/', notFound)
router.get('/joyas', getAllJoyasControllersFormat)
router.get('/joyas/filtros', getAllJoyasControllersFiltered)
router.get('/joyas/:id', getAllJoyasControllersById)
export default router
