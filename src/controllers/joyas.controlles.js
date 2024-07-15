import { HATEOAS, HATEOASFull } from '../helpers/hateoas.js'
import {
    getAllJoyasModel,
    getAllJoyasModelFiltered,
    getAllJoyasModelFormat,
} from '../models/joyas.models.js'

export const notFound = (req, res) => {
    res.status(404).send('Not found')
}

export const getAllJoyasControllersById = async (req, res) => {
    try {
        const { id } = req.params
        const result = await getAllJoyasModel(id)
        const response = await HATEOASFull('joyas', result)
        res.status(200).json({ joyas: response })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getAllJoyasControllersFormat = async (req, res) => {
    try {
        const { limits = 10, order_by = 'id_ASC', page = 1 } = req.query
        const result = await getAllJoyasModelFormat(limits, order_by, page)

        const response = await HATEOAS('joyas', result)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const getAllJoyasControllersFiltered = async (req, res) => {
    try {
        const { categoria, metal, precio_min, precio_max } = req.query
        const result = await getAllJoyasModelFiltered(
            categoria,
            metal,
            precio_min,
            precio_max
        )
        const response = await HATEOASFull('joyas', result)
        res.status(200).json(response)
    } catch (error) {
        console.error('Error obteniendo joyas filtradas:', error)
        res.status(500).json({ error: 'Error obteniendo joyas filtradas' })
    }
}
