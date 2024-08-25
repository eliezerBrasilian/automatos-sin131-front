import { MainContentProps } from "../types/MainContentProps";
import { AfdResultanteComponent } from "./AfdResultanteComponent";
import { AfnComponent } from "./AfnComponent";
import { Item } from "./Item";

export function MainContent(props: MainContentProps) {
  return (
    <div className="container_geral">
      <h2 className="titulo">Bem vindo ao mundo dos autômatos</h2>
      <div className="main_content">
        <div className="main_btns">
          <Item text={"Entrar com AFD"} isSelected={false} onClick={() => {}} />
          <Item text={"Entrar com AFN"} isSelected={false} onClick={() => {}} />
        </div>

        {/* <div className="btns-div">
          <Item
            text={"Converter AFN para AFD"}
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
              text="Testar equivalência"
              onClick={props.testEquivalency}
              isSelected={props.indexSelected == 3}
            />
          )}
        </div> */}

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
          <div>
            {props.indexSelected == 2 && (
              <div>
                <p>Digite a palavra</p>
                <div className="simular_container">
                  <input
                    className="input_palavra"
                    placeholder="digite a palavra..."
                    value={props.palavra}
                    onChange={(ev) => props.setPalavra(ev.target.value)}
                  />

                  <button
                    className="btn_simularafd"
                    onClick={props.simulateAccepting}
                  >
                    Simular AFD
                  </button>
                </div>
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
          </div>

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
                        estadosFinais={props.afdMinimized.estadosFinais}
                        transicoes={props.afdMinimized.conjuntoTransicoes}
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
                    : "Palavra rejeitada na AFN"}
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
          <div>
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
            <button
              style={{
                marginTop: 30,
                fontSize: 14,
                backgroundColor: "#16697A",
                marginLeft: 20,
              }}
              onClick={props.clickFillAutomato}
            >
              Preencher autômato automaticamente
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
