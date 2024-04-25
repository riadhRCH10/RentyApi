// logger.js
function logRequest(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const method = req.method;
    const url = req.url;
    const body = req.body
    const status = res.statusCode;
    const contentLength = res.get('Content-Length');
    const responseTime = Date.now() - start;

    console.log(`${method} ${url} ${status} ${contentLength || '-'} - ${responseTime} ms : ${body}`);
  });

  next();
}

module.exports = logRequest;