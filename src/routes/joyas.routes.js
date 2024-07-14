import { Router } from 'express'

import {
    getAllJoyasControllers,
    getAllJoyasControllersFormat,
    getAllJoyasControllersHATEOAS,
} from '../controllers/joyas.controlles.js'

const router = Router()

router.get('/joyas', getAllJoyasControllers)
router.get('/joyas', getAllJoyasControllersFormat)
router.get('/joyas_hateoas', getAllJoyasControllersHATEOAS)

export default router
