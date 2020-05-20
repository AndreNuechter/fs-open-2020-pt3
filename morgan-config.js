const methodsWBody = ['PUT', 'POST'];

module.exports = (tokens, req, res) => [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms',
    methodsWBody.includes(req.method.toUpperCase()) ? JSON.stringify(req.body) : ''
].join(' ');