import React, { useEffect } from 'react';

function Contato() {
  useEffect(() => {
    document.body.style.background = '#453528';
    // Limpar o estilo ao desmontar o componente
    return () => {
      document.body.style.background = '';
    };
  }, []);

  return (
    
    <div>
      <h1>Indisponível</h1>
    </div>
  );
}

export default Contato;