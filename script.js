const fs = require('fs');

fs.readFile('./texto.txt', 'utf8', (err, datos) => {
    if (err) return console.error('Error al leer el archivo:', err);
    
    const conteo = datos.split(/\s+/).filter(p => p.trim()).length;
    console.log(`El archivo contiene ${conteo} palabras.`);
});