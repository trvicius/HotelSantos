const express = require('express')
const { resolve, join } = require('path');
const app = express()
//const PORT = process.env.PORT || 3000
 



app.use('/', 
    express.static(
        resolve(
        __dirname,
        './build'
    )
)
)
app.get('*', function(req, res) {
    res.sendFile('index.html', {root: join(__dirname, './build/')});
  })

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log('Servidor Front em execução!'))