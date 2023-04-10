const express = require('express')

const PORT = 3000

const app = express()

app.get('/', (req, res) => {
    return res.send(`
        <div style="height: 95vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
            <h1 style="font-family: sans-serif;">Hello Sistemas para Internet - P3</h1>
            <p style="font-family: sans-serif;">A melhor turma.</p>
        </div>
    `)
})

app.listen(PORT, (err) => {
    if(err) {
        throw err
    }

    console.log(`Servir running on http://localhost:${PORT}`)
})