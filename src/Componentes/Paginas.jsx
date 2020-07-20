import React from "react";

const Paginas = ({ actual, maximo }) => {
  return (
    <div>
      <button>Previus</button>
      <button>1</button>
      <button>[...]</button>
      <button>{actual}</button>
      <button>[...]</button>
      <button>{maximo}</button>
      <button>next</button>
    </div>
  );
};
//   <div className="estilo">
//             <div className= 'pag'>[Previus] </div>
//             <div className= 'pag'> {actual} </div>
//             <div className= 'pag'> {maximo} </div>
//             <div className= 'pag'>[Next]</div>
//         </div>
// };

export default Paginas;
