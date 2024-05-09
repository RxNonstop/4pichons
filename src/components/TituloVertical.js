import React from 'react';

const TituloVertical = ({ texto }) => {
  return (
    <div className="titulo-vertical">
      {texto.split('').map((char, index) => (
        <div key={index} className="letra">
          {char}
        </div>
      ))}
    </div>
  );
};

export default TituloVertical;