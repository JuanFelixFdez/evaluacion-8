const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000


app.get('/pagina1', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina1.html'));
});

app.get('/pagina2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina2.html'));
});

app.listen(port, () => console.log(`Servidor escuchando en http://localhost:${port}`))