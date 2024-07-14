const HATEOAS = async (entity, data) => {
    const results = data
        .map((item) => {
            return {
                nombre: item.nombre,
                href: `http://localhost:3000/${entity}/${item.id}`,
            }
        })
        .slice(0, 4)
    const totalJoyas = data.length
    const stockTotal = data.length
    const dataWithHATEOAS = {
        totalJoyas,
        stockTotal,
        results,
    }
    return dataWithHATEOAS
}

export default HATEOAS
