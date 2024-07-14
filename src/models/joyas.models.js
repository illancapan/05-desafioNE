import { pool } from '../../database/config.js'
import format from 'pg-format'

export const getAllJoyaModel = async (limits = 2) => {
    const allJoyas = { text: 'SELECT * FROM joyas' }
    const result = await pool.query(allJoyas)
    return result.rows
}

//LIMIT
export const getAllJoyaModelLimit = async (limits = 5) => {
    const allJoyasLimit = await pool.query(
        'SELECT * FROM inventario ORDER BY id DESC LIMIT $1',
        [limits]
    )
    return allJoyasLimit.rows
}

//pg-format modo de uso parra enviar paginas
export const getAllJoyaModelFormat = async (
    order_by = 'id_ASC',
    limits = 5,
    page = 0
) => {
    const [atribute, direction] = order_by.split('_')
    const offset = page * limits

    const allJoyasFormat = format(
        'SELECT * FROM inventario ORDER BY %s %s LIMIT %s OFFSET %s',
        atribute,
        direction,
        limits,
        offset
    )
    console.log('query:', allJoyasFormat)
    const result = await pool.query(allJoyasFormat)
    return result.rows
}

//HATEOAS
export const getAllJoyaModelHATEOAS = async () => {
    const allJoyasHATEOAS = { text: 'SELECT * FROM inventario' }
    const result = await pool.query(allJoyasHATEOAS)
    return result.rows
}
