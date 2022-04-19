import React, { useEffect, useState } from "react";
import "./App.css";
import generate_costs from "./scripts/generate_costs";
import find_best_cost from "./scripts/find_best_cost";
import find_path from "./scripts/find_path";


function App() {
  const main_color = "#E9679B";
  const second_color = "#F8CD4F";

  const [matrix, setMatrix] = useState([]);
  const [path, setPath] = useState([]);
  const [result, setResult] = useState(null);

  useEffect(() => {
    generateMap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleReset() {
    setPath([]);
    setResult(null);
  }

  function generateMap() {
    handleReset();
    const costs = generate_costs();
    setMatrix(costs);
  }

  function handlePlay() {
    const result = find_best_cost(matrix, matrix.length, matrix[0].length);
    const path = find_path(result[1]);
    setPath(path);
    setResult(result[0]);
  }

  function isInPath(i, j) {
    const index = path.findIndex((coord) => coord[0] === i && coord[1] === j);
    return index >= 0;
  }

  function getColor(i, j) {
    if (i + j === 0) return main_color;
    else if (isInPath(i, j)) return main_color;
    else if ((i + 1) * (j + 1) === matrix.length * matrix.length)
      return second_color;
    return "#fff";
  }

  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <div className="container">
        <div className="text-center mb-4 pt-4" style={{ color: "#353535" }}>
          <h1 className="mb-3">
            Mínimo Caminho
          </h1>
          <p>
          Em uma matriz N x M é dado uma posição inicial onde deverá ser encontrado o caminho até o ponto final. A finalidade é encontrar o custo mínimo para alcançar o último ponto da matriz a partir da primeira.
          </p>
        </div>
        <h4 className="text-center bold">
          {result !== null && <b>O menor caminho é {result}</b>}
        </h4>
        <div className="row">
          <div className="col d-flex justify-content-center mt-3">
            <div>
              {matrix.map((line, i) => (
                <div key={i + 1} className="d-flex">
                  {line.map((cost, j) => (
                    <div
                      key={j + 1}
                      className="tablet d-flex justify-content-center align-items-center"
                      style={{ backgroundColor: getColor(i, j) }}
                    >
                      {cost}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 align-items-center">
          <button className="btn handle-btn finish mr-5" style={{backgroundColor: '#B9A3D1'}} onClick={generateMap}>
            Gerar Mapa
          </button>
          <button className="btn handle-btn start" style={{backgroundColor: '#6EE0E0'}} onClick={handlePlay}>
            Resolver
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;