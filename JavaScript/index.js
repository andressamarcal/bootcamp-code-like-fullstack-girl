const express = require('express')
const bodyParse = require('body-parser')

//importando o arquivo de rotas
const userRoute = require('./routes/userRoute')

//instancia o framework na porta 3000
const app = express()
const port = 3000

app.use(bodyParse.urlencoded({ extended: false }))

userRoute(app)

//manda essa mensagem quando alguem acessar a url
app.get('/', (req, res) => res.send('Ola mundo pelo Express!!!'))

app.listen(port, () => console.log('API rodando na porta 3000'))

//criando endpoints