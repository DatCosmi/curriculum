// App.js
import React, { useState } from 'react';
import UploadCV from './components/UploadCV';
import EditCV from './components/EditCV';
import CVList from './components/CVList';

const App = () => {
  const [cvs, setCvs] = useState([]); // Estado para almacenar los currículos

  const handleDelete = (cvId) => {
    // Lógica para eliminar el currículum vitae de la base de datos
  };

  return (
    <div>
      <UploadCV />
     
      <CVList cvs={cvs} onDelete={handleDelete} />
    </div>
  );
};

export default App;

// {/* <EditCV cvData={/* Datos del currículum vitae seleccionado */} /> */}