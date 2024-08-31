import { EstadoSelectable } from "../components/EstadoSelectable";
import { TransicaoComponent } from "../components/TransicaoComponent";
import { EstadosSelectable } from "../components/EstadosSelectable";
import { EstadosComponent } from "../components/EstadosComponent";
import { AlfabetoComponent } from "../components/AlfabetoComponent";
import { mapAfnToCytoscapeElements } from "../mappers/CytoscapeMapper";
import CytoscapeComponent from "react-cytoscapejs";
import { useNavigate } from "react-router-dom";
import { Rotas } from "../navigation/Rotas";
import { useAfnContext } from "../context/AfnContext";

export function CreateAfnPage() {
  const afnContext = useAfnContext();

  const nav = useNavigate();

  return (
    <div className="afd-page">
      <h1>
        {afnContext.afdConvertedFromAfn != null
          ? "AFN convertido com sucesso para AFD 😊"
          : "Área de criação do Autômato Finito Não Deterministico (AFN)"}
      </h1>

      {afnContext.afdConvertedFromAfn != null ? (
        <div className="menu-container" style={{ height: "fit-content" }}>
          <div className="automato-container">
            <CytoscapeComponent
              elements={mapAfnToCytoscapeElements(
                afnContext.afdConvertedFromAfn
              )}
              style={{ width: "500px", height: "400px" }}
              layout={{
                name: "grid",
                rows: 2,
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
          </div>
          <div className="btns-container">
            <button
              onClick={() => {
                afnContext.minimizeAfd();

                if (afnContext.minimizeAfd != undefined)
                  nav(Rotas.MINIMIZE_AFD);
              }}
            >
              Minimizar AFD
            </button>
            <button onClick={() => nav(Rotas.SIMULATE_WORD)}>
              Simular aceitação de palavras
            </button>
            <button onClick={() => nav(Rotas.TEST_EQUIVALENCY)}>
              Testar equivalência
            </button>
          </div>
        </div>
      ) : (
        <div className="menu-container" style={{ height: "fit-content" }}>
          <div className="estado-alfabeto-row">
            <EstadosComponent
              inputs={afnContext.inputs}
              handleAddInput={afnContext.handleAddInput}
              handleInputChange={afnContext.handleInputChange}
            />
            <AlfabetoComponent
              inputs={afnContext.alfabetoInputs}
              handleAddInput={afnContext.handleAddAlfabetoInput}
              handleInputChange={afnContext.handleAlfabetoInputChange}
            />
          </div>

          <TransicaoComponent
            inputs={afnContext.transicaoInputs}
            handleTransicaoEstadoAtualInputChange={
              afnContext.handleEstadoAtualInputChange
            }
            handleTransicaoSimboloInputChange={
              afnContext.handleSimboloInputChange
            }
            handleTransicaoEstadoDestinoInputChange={
              afnContext.handleEstadoDestinoChange
            }
            handleAddInput={afnContext.handleAddTransicaoInput}
          />

          <div className="estado-inicial-e-finais-row">
            <EstadoSelectable
              handleEstadoInicialChange={afnContext.handleEstadoInicialChange}
              estadoInicialSelecionado={afnContext.estadoInicial}
              estados={afnContext.inputs}
            />

            <EstadosSelectable
              estados={afnContext.inputs}
              handleEstadoDestinoChange={afnContext.handleEstadoDestinoChange}
              listaComEstadosSelecionados={
                afnContext.estadosDestinoSelecionados
              }
            />
          </div>

          <div className="btns-container">
            <button onClick={afnContext.handleClickConvertAfnToAfd}>
              Converter para AFD
            </button>
            <button onClick={afnContext.clickFillAutomato}>
              Preencher Automaticamente
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
