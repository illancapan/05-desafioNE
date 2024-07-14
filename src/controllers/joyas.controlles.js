import HATEOAS from '../helpers/hateoas.js'
import {
    getAllJoyaModelFormat,
    getAllJoyaModelHATEOAS,
    getAllJoyaModelLimit,
} from '../models/joyas.models.js'

export const getAllJoyasControllers = async (req, res) => {
    try {
        const { limit } = req.query
        const result = await getAllJoyaModelLimit(limit)
        res.status(200).json({ joyas: result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//pg-format limit

export const getAllJoyasControllersFormat = async (req, res) => {
    try {
        const { order_by, limit, page } = req.query
        const result = await getAllJoyaModelFormat(order_by, limit, page)
        res.status(200).json({ joyas: result })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

// HATEOAS
export const getAllJoyasControllersHATEOAS = async (req, res) => {
    try {
        const result = await getAllJoyaModelHATEOAS()
        const allJoyasWhitHATEOAS = await HATEOAS('joyas', result)
        res.status(200).json({ joyas: allJoyasWhitHATEOAS })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
