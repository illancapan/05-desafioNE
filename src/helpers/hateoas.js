export const HATEOAS = async (entity, data) => {
    const results = data
        .map((item) => {
            return {
                nombre: item.nombre,
                href: `http://localhost:3000/${entity}/${item.id}`,
            }
        })
        .slice(0, 10)
    const totalJoyas = data.length
    const stockTotal = data.reduce((total, item) => total + item.stock, 0)
    const dataWithHATEOAS = {
        totalJoyas,
        stockTotal,
        results,
    }
    return dataWithHATEOAS
}

export const HATEOASFull = async (entity, data) => {
    const results = data.map((item) => {
        return {
            id: item.id,
            nombre: item.nombre,
            categoria: item.categoria,
            metal: item.metal,
            precio: item.precio,
            stock: item.stock,
            // href: `http://localhost:3000/${entity}/${item.id}`,
        }
    })
    const totalJoyas = results.length
    const stockTotal = results.reduce((total, item) => total + item.stock, 0)
    return {
        totalJoyas,
        stockTotal,
        results,
    }
}
