import "../App.css";
import { useAfnContext } from "../context/AfnContext";
import { useNavigate } from "react-router-dom";
import CytoscapeComponent from "react-cytoscapejs";
import { mapMinimedAfnToCytoscapeElements } from "../mappers/CytoscapeMapper";
export function MinimizedAfdPage() {
  const afnContext = useAfnContext();

  const nav = useNavigate();

  return (
    <div className="afd-page">
      <h1>Autômato minimizado com sucesso 🆗</h1>

      <div className="menu-container" style={{ height: "fit-content" }}>
        <div className="automato-container">
          {afnContext.minimizedAfd != undefined && (
            <CytoscapeComponent
              elements={mapMinimedAfnToCytoscapeElements(
                afnContext.minimizedAfd
              )}
              style={{ width: "600px", height: "400px" }}
              layout={{
                name: "grid",
                rows: 3,
                cols: 3,
              }}
              stylesheet={[
                {
                  selector: "node",
                  style: {
                    label: "data(label)",
                    "text-valign": "center",
                    "text-halign": "center",
                    "font-weight": "normal",
                    "font-size": 15,
                    color: "#000",
                    "background-color": "#61bffc",
                    "text-outline-width": 0,
                    "text-outline-color": "transparent",
                    width: 40,
                    height: 40,
                  },
                },
                {
                  selector: "node[isFinalState = 'true']", // Seletor para estados finais
                  style: {
                    "border-width": 2,
                    "border-color": "#000",
                    shape: "ellipse",
                  },
                },
                {
                  selector: "edge",
                  style: {
                    label: "data(label)",
                    width: 2,
                    "line-color": "#ccc",
                    "target-arrow-color": "#ccc",
                    "target-arrow-shape": "triangle",
                    "curve-style": "bezier",
                  },
                },
              ]}
            />
          )}
        </div>
        <div className="btns-container">
          <button
            onClick={() => {
              afnContext.reset();
              nav(-1);
            }}
          >
            Retornar ao menu anterior
          </button>
        </div>
      </div>
    </div>
  );
}
