const express = require('express') // importando o express
const app = express() // criação da aplicação
const port = 3000 //definindo a porta

//criar rota padrão ou raiz
app.get('/',(req,res)=>{
    res.send('Olá :)!')
})

// executar a porta 3000

app.listen(port,()=>{
    console.log(`servidor rodando no endereço http://localhost:${port}`)
})

