import { AfnComponentProps } from "../types/AfnComponentProps";
import { AlfabetoComponent } from "./AlfabetoComponent";
import { EstadosComponent } from "./EstadosComponent";
import { EstadoSelectable } from "./EstadoSelectable";
import { EstadosSelectable } from "./EstadosSelectable";
import { TransicaoComponent } from "./TransicaoComponent";

export function AfnComponent(props: AfnComponentProps) {
  return (
    <div>
      {props.indexSelected == 2 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            marginTop: 30,
          }}
        >
          <p>Digite a palavra</p>
          <input
            placeholder="Digite a palavra"
            value={props.palavra}
            onChange={(ev) => props.setPalavra(ev.target.value)}
          />
        </div>
      )}

      <div className="estado-alfabeto-row">
        <EstadosComponent
          inputs={props.estadosInputs}
          handleAddInput={props.handleAddInput}
          handleInputChange={props.handleInputChange}
        />
        <AlfabetoComponent
          inputs={props.alfabetoInputs}
          handleAddInput={props.handleAddAlfabetoInput}
          handleInputChange={props.handleAlfabetoInputChange}
        />
      </div>

      <TransicaoComponent
        inputs={props.transicaoInputs}
        handleTransicaoEstadoAtualInputChange={
          props.handleTransicaoEstadoAtualInputChange
        }
        handleTransicaoSimboloInputChange={
          props.handleTransicaoSimboloInputChange
        }
        handleTransicaoEstadoDestinoInputChange={
          props.handleTransicaoEstadoDestinoInputChange
        }
        handleAddInput={props.handleAddTransicaoInput}
      />

      {props.estadosInputs[0].value != "" && (
        <div className="estado-inicial-e-finais-row">
          <EstadoSelectable
            handleEstadoInicialChange={props.handleEstadoInicialChange}
            estadoInicialSelecionado={props.estadoInicial}
            estados={props.estadosInputs}
          />

          <EstadosSelectable
            estados={props.estadosInputs}
            handleEstadoDestinoChange={props.handleEstadoDestinoChange}
            listaComEstadosSelecionados={props.estadosDestinoSelecionados}
          />
        </div>
      )}
    </div>
  );
}
