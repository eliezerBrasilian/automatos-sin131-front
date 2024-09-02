import { useState } from "react";
import { EstadoSelectable } from "../components/EstadoSelectable";
import { TransicaoComponent } from "../components/TransicaoComponent";
import { EstadosSelectable } from "../components/EstadosSelectable";
import { EstadosComponent } from "../components/EstadosComponent";
import { AlfabetoComponent } from "../components/AlfabetoComponent";
import { useAfnContext } from "../context/AfnContext";
import { useNavigate } from "react-router-dom";
import { Rotas } from "../navigation/Rotas";

export function CreateAfdPage() {
  const afnContext = useAfnContext();
  const nav = useNavigate();
  const [showFillButton, setShowFillButton] = useState(true); // Estado para controlar a visibilidade do botão

  return (
    <div className="afd-page">
      <h1>Área de criação do Autômato Finito Deterministico (AFD)</h1>

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
            listaComEstadosSelecionados={afnContext.estadosDestinoSelecionados}
          />
        </div>

        <div className="btns-container">
          {showFillButton ? (
            <button
              onClick={() => {
                afnContext.clickFillAutomatoAfd();
                setShowFillButton(false); // Ocultar o botão após o clique
              }}
            >
              Preencher Automaticamente
            </button>
          ) : (
            <>
              <button
                onClick={() => {
                  afnContext.minimizeAfdSemTerConvertidoAntes();

                  if (afnContext.minimizeAfd != undefined)
                    nav(Rotas.MINIMIZE_AFD);
                }}
              >
                Minimizar AFD
              </button>
              <button onClick={() => nav(Rotas.SIMULATE_WORD)}>
                Simular aceitação de palavras
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
