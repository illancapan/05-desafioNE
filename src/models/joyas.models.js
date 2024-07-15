import { pool } from '../../database/config.js'
import format from 'pg-format'

export const getAllJoyasModel = async (id) => {
    try {
        const allJoyas = {
            text: 'SELECT * FROM inventario WHERE ID = $1',
            values: [id],
        }
        const result = await pool.query(allJoyas)
        return result.rows
    } catch (error) {
        console.log('Error ejecutando la consulta', error)
        throw new Error(
            'Error ejecutando la consulta a la base de datos',
            error.message
        )
    }
}
export const getAllJoyasModelFormat = async (
    limits = 10,
    order_by = 'id_ASC',
    page = 1
) => {
    try {
        const [campo, orden] = order_by.split('_')
        const offset = Math.abs((page - 1) * limits)

        const allJoyasFormat = format(
            'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
            campo,
            orden,
            limits,
            offset
        )
        console.log('query:', allJoyasFormat)
        const result = await pool.query(allJoyasFormat)
        return result.rows
    } catch (error) {
        console.log('Error ejecutando la consulta', error)
        throw new Error(
            'Error ejecuntando la consulta a la base de datos',
            error.message
        )
    }
}

export const getAllJoyasModelFiltered = async (
    categoria,
    metal,
    precio_min,
    precio_max
) => {
    try {
        let queryAllJoyas = 'SELECT * FROM inventario WHERE 1=1'
        const queryParams = []

        let paramIndex = 1
        if (categoria) {
            queryAllJoyas += ` AND categoria = $${paramIndex}`
            queryParams.push(categoria)
            paramIndex++
        }
        if (metal) {
            queryAllJoyas += ` AND metal = $${paramIndex}`
            queryParams.push(metal)
            paramIndex++
        }
        if (precio_min) {
            const precioMinInt = parseInt(precio_min)
            queryAllJoyas += ` AND precio >= $${paramIndex}`
            queryParams.push(precioMinInt)
            paramIndex++
        }
        if (precio_max) {
            const precioMaxInt = parseInt(precio_max)
            queryAllJoyas += ` AND precio <= $${paramIndex}`
            queryParams.push(precioMaxInt)
            paramIndex++
        }
        console.log('Consulta SQL generada:', queryAllJoyas, queryParams)
        const result = await pool.query(queryAllJoyas, queryParams)
        return result.rows
    } catch (error) {
        console.error('Error ejecutando la consulta:', error)
        throw new Error('Error al obtener todas las joyas filtradas')
    }
}
