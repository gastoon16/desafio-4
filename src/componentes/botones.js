import React from 'react';
import './boton.css';

const Boton = () => {
  const handleClick = (buttonText) => {
    alert(`¡Has hecho clic en el botón "${buttonText}"!`);
  };

  return (
    <div class="parent">
    <button className="div1" onClick={() => handleClick("Botón 1")}>1</button>
    <button className="div2" onClick={() => handleClick("Botón 2")}>2</button>
    <button className="div3" onClick={() => handleClick("Botón 3")}>3</button>
    <button className="div4" onClick={() => handleClick("Botón 4")}>4</button>
    </div>
    
  );
};

export default Boton;
