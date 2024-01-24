// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'curriculum',
});

db.connect();

// Rutas para manejar CRUD
app.post('/api/uploadCV', async (req, res) => {
    try {
      const { file } = req.files;  // Asegúrate de que estás utilizando middleware como `express-fileupload` para manejar archivos en el backend
      const fileName = file.name;
      const filePath = `/uploads/${fileName}`;  // Ruta donde se almacenará el archivo en el sistema de archivos
  
      // Mueve el archivo al sistema de archivos
      file.mv(`.${filePath}`, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
  
        // Guarda la ubicación del archivo en la base de datos
        const sql = 'INSERT INTO curriculum_vitae (file_path) VALUES (?)';
        db.query(sql, [filePath], (err, result) => {
          if (err) throw err;
          console.log('Currículum Vitae subido con éxito');
          res.status(200).send('Currículum Vitae subido con éxito');
        });
      });
    } catch (error) {
      console.error('Error al subir el CV', error);
      res.status(500).send('Error al subir el CV');
    }
  });
  

app.get('/api/getCVs', (req, res) => {
  // Lógica para obtener la lista de CVs desde la base de datos
});

app.put('/api/editCV/:id', (req, res) => {
  // Lógica para editar un CV en la base de datos
});

app.delete('/api/deleteCV/:id', (req, res) => {
  // Lógica para eliminar un CV de la base de datos
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
