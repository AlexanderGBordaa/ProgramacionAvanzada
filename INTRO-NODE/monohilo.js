const fs = require('fs');
const path = require('path');

function leer(ruta, cb) {
  fs.readFile(ruta, 'utf8', (err, data) => {
    if (err) {
      if (err.code === 'ENOENT') {
        fs.writeFile(ruta, 'Contenido inicial\n', (err) => {
          if (err) throw err;
          console.log('Archivo creado:', ruta);
        });
      } else {
        console.error('Error al leer:', err);
      }
    } else {
      console.log('Contenido:', data);
    }
  });
}

leer(path.join(__dirname, 'archivo.txt'));
