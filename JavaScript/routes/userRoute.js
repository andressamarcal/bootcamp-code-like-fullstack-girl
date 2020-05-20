//usando modulo nativo para file system
const fs = require('fs')
const { join } = require('path')

//juntando o nome do diretorio com o nome dos users/usuarios do sistema
const filePath = join(__dirname, 'users.json')

//consultando e armazenando dados no banco
const getUsers = () => {
    const data = fs.existsSync(filePath)
        ? fs.readFileSync(filePath)
        : []
    try {
        return JSON.parse(data)
    } catch(error){
        return []
    }
}

//salvar usuario
const saveUser = (users) => fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))

//rotas
const userRoute = (app) => {
    // GET POS PUT DELETE
    app.route('/users/:id?')
        .get((req, res) => {
            const users = getUsers()
            
            res.send({ users })
        })

        .post((req, res) => {
            const users = getUsers()

            users.push(req.body)
            saveUser(users)

            res.status(201).send('OK')
        })

        .put((req, res) => {
            const users = getUsers()
            saveUser(users.map(user => {
                if (user.id === req.params.id){
                    return{
                        ...user,
                        ...req.body
                    }
                }
                return user
            }))
            res.status(200).send('OK')
        })

        .delete((req, res) => {
            const users = getUsers()
            saveUser(user.filter(user => user.id !== req.params.id))
            res.status(200).send('OK')
        })
}

module.exports = userRoute