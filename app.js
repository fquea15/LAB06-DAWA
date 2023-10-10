const express = require('express');
const path = require('path');

const app = express();
const skills = require('./skills');

app.post('/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    // Renderiza el modal con los datos del formulario
    res.render('modal', { nombre, email, mensaje });
});

// Configurar el motor de vistas para Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Ruta para servir archivos estáticos (como CSS y JS)
app.use(express.static(path.join(__dirname, 'public')));

// Definir una ruta para renderizar tu archivo Pug
app.get('/', (req, res) => {
    const datos = {
        nombre: "Ruben Freddy Quea jacho",
        profesion: "Desarrollador Web Full-Stack"
    }
    res.render('index', { home: datos, skills:skills }); // Esto renderizará el archivo 'index.pug' en la carpeta 'views'
});


// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
