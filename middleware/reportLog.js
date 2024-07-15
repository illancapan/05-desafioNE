export const reportLog = (req, res, next) => {
    console.log({
        method: req.method,
        body: req.body,
        params: req.params,
        url: req.url,
        status: res.statusCode,
    })
}
