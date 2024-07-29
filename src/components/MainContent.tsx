import { MainContentProps } from "../types/MainContentProps";
import { AfdResultanteComponent } from "./AfdResultanteComponent";
import { AfnComponent } from "./AfnComponent";
import { Item } from "./Item";

export function MainContent(props: MainContentProps) {
  return (
    <div className="container_geral">
      <h2>Bem vindo ao mundo dos autômatos</h2>
      <div className="main_content">
        <div className="btns-div">
          <Item
            text="Entrar com a AFN"
            onClick={props.convertAfnToAfd}
            isSelected={props.indexSelected == 0}
          />
          {props.canShowRestButtonItens && (
            <Item
              text="Minimizar AFD"
              onClick={props.minimizeAfd}
              isSelected={props.indexSelected == 1}
            />
          )}

          {props.canShowRestButtonItens && (
            <Item
              text="Simular aceitação"
              onClick={props.handleMenuSimulate}
              isSelected={props.indexSelected == 2}
            />
          )}

          {props.canShowRestButtonItens && (
            <Item
              text="Testar equivalência entre AFD e AFN"
              onClick={props.testEquivalency}
              isSelected={props.indexSelected == 3}
            />
          )}
        </div>

        <div className="resultado_container">
          {props.afnContentInputIsVisible && !props.canShowRestButtonItens && (
            <AfnComponent
              indexSelected={props.indexSelected}
              palavra={props.palavra}
              setPalavra={props.setPalavra}
              estadosInputs={props.estadosInputs}
              handleAddInput={props.handleAddInput}
              handleInputChange={props.handleInputChange}
              alfabetoInputs={props.alfabetoInputs}
              handleAddAlfabetoInput={props.handleAddAlfabetoInput}
              transicaoInputs={props.transicaoInputs}
              handleTransicaoEstadoAtualInputChange={
                props.handleTransicaoEstadoAtualInputChange
              }
              handleAlfabetoInputChange={props.handleAlfabetoInputChange}
              handleTransicaoSimboloInputChange={
                props.handleTransicaoSimboloInputChange
              }
              handleTransicaoEstadoDestinoInputChange={
                props.handleTransicaoEstadoDestinoInputChange
              }
              handleAddTransicaoInput={props.handleAddTransicaoInput}
              handleEstadoInicialChange={props.handleEstadoInicialChange}
              estadoInicial={props.estadoInicial}
              handleEstadoDestinoChange={props.handleEstadoDestinoChange}
              estadosDestinoSelecionados={props.estadosDestinoSelecionados}
            />
          )}

          {props.indexSelected == 2 && (
            <div>
              <p>Digite a palavra</p>
              <input
                placeholder="digite a palavra..."
                value={props.palavra}
                onChange={(ev) => props.setPalavra(ev.target.value)}
              />

              <button onClick={props.simulateAccepting}>Simular AFD</button>

              {props.afdAccepted != undefined && (
                <div>
                  <p>
                    {props.afdAccepted == true
                      ? "Palavra aceita na AFD"
                      : "Palavra rejeitatada na AFD"}
                  </p>
                </div>
              )}
            </div>
          )}

          {props.afd != undefined &&
            props.indexSelected != 2 &&
            props.indexSelected != 3 && (
              <div className="afd-afd-minimizado-row">
                <AfdResultanteComponent
                  title="AFD Resultante"
                  alfabeto={props.afd.alfabeto}
                  estadoInicial={props.estadoInicial}
                  estadosFinais={props.afd.estadosFinais}
                  transicoes={props.afd.conjuntoTransicoes}
                />
                {props.afdMinimized != undefined &&
                  props.indexSelected == 1 && (
                    <div style={{ display: "flex", gap: 20 }}>
                      <hr />
                      <AfdResultanteComponent
                        title="AFD Minimizado"
                        alfabeto={props.afd.alfabeto}
                        estadoInicial={props.estadoInicial}
                        estadosFinais={props.afd.estadosFinais}
                        transicoes={props.afd.conjuntoTransicoes}
                      />
                    </div>
                  )}
              </div>
            )}

          {props.indexSelected == 3 &&
            props.afnAccepted != undefined &&
            props.afdAccepted != undefined && (
              <div>
                <p>
                  {props.afnAccepted == props.afdAccepted
                    ? "AFD resultante e AFN são equivalentes"
                    : "AFD resultante e AFN não são equivalentes"}
                </p>

                <p>
                  {props.afdAccepted
                    ? "Palavra aceita na AFD"
                    : "Palavra rejeitatada na AFD"}
                </p>
                <p>
                  {props.afnAccepted
                    ? "Palavra aceita na AFN"
                    : "Palavra rejeitatada na AFN"}
                </p>
              </div>
            )}
        </div>
      </div>
      <div className="btn_novaafn_container">
        {props.canShowRestButtonItens && (
          <button
            className="btn_criarnovaafn"
            style={{
              backgroundColor: "#201E1F",
            }}
            onClick={props.createNewAfn}
          >
            Criar nova AFN
          </button>
        )}
      </div>
      <div className="coverterafd_container">
        {props.afnContentInputIsVisible && (
          <button
            style={{
              marginTop: 30,
              fontSize: 14,
              backgroundColor: "#DA344D",
            }}
            onClick={props.handleClickConvertAfnToAfd}
          >
            Converter para AFD
          </button>
        )}
      </div>
    </div>
  );
}
