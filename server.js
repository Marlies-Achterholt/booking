const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Test-Route ohne DB
app.get('/', (req, res) => {
    res.send('Server funktioniert!');
});

app.listen(PORT, () => {
    console.log(`Server läuft auf http://localhost:${PORT}`);
});
