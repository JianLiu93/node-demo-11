if (path === '/') {
	response.statusCode = 200
	response.setHeader('Content-Type', 'text/html;charset=utf-8')
	response.write(`
	  <link rel="stylesheet" href="./style.css">
	  <h1>Server-demo</h1>
	`)
	response.end()
} else if (path === '/style.css') {
	response.statusCode = 200
	response.setHeader('Content-Type', 'text/css;charset=utf-8')
	response.write(`h1{color: red;}`)
	response.end()
} else {
	response.statusCode = 404
	response.end()
}