import { EstadoItem, InputItem, TransicaoItem } from "../App";
import { AlfabetoComponent } from "./AlfabetoComponent";
import { EstadosComponent } from "./EstadosComponent";
import { EstadoSelectable } from "./EstadoSelectable";
import { EstadosSelectable } from "./EstadosSelectable";
import { TransicaoComponent } from "./TransicaoComponent";

interface AfnComponentProps {
  indexSelected: number;
  palavra: string;
  estadoInicial: string;
  alfabetoInputs: InputItem[];
  estadosInputs: InputItem[];
  transicaoInputs: TransicaoItem[];
  estadosDestinoSelecionados: EstadoItem[];
  setPalavra: React.Dispatch<React.SetStateAction<string>>;
  handleInputChange: (id: number, value: string) => void;
  handleAddInput: () => void;
  handleAlfabetoInputChange: (id: number, value: string) => void;
  handleAddAlfabetoInput: () => void;
  handleTransicaoEstadoAtualInputChange: (
    id: number,
    estadoAtualValue: string
  ) => void;
  handleTransicaoSimboloInputChange: (
    id: number,
    simboloEntradaValue: string
  ) => void;
  handleTransicaoEstadoDestinoInputChange: (
    id: number,
    estadoDestinoValue: string
  ) => void;
  handleAddTransicaoInput: () => void;
  handleEstadoInicialChange: (value: string) => void;
  handleEstadoDestinoChange: (id: number, value: string) => void;
}

export function AfnComponent({
  indexSelected,
  palavra,
  setPalavra,
  estadosInputs,
  handleAddInput,
  handleInputChange,
  alfabetoInputs,
  handleAddAlfabetoInput,
  transicaoInputs,
  handleTransicaoEstadoAtualInputChange,
  handleAlfabetoInputChange,
  handleTransicaoSimboloInputChange,
  handleTransicaoEstadoDestinoInputChange,
  handleAddTransicaoInput,
  handleEstadoInicialChange,
  estadoInicial,
  handleEstadoDestinoChange,
  estadosDestinoSelecionados,
}: AfnComponentProps) {
  return (
    <div>
      {indexSelected == 2 && (
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
            value={palavra}
            onChange={(ev) => setPalavra(ev.target.value)}
          />
        </div>
      )}

      <div className="estado-alfabeto-row">
        <EstadosComponent
          inputs={estadosInputs}
          handleAddInput={handleAddInput}
          handleInputChange={handleInputChange}
        />
        <AlfabetoComponent
          inputs={alfabetoInputs}
          handleAddInput={handleAddAlfabetoInput}
          handleInputChange={handleAlfabetoInputChange}
        />
      </div>

      <TransicaoComponent
        inputs={transicaoInputs}
        handleTransicaoEstadoAtualInputChange={
          handleTransicaoEstadoAtualInputChange
        }
        handleTransicaoSimboloInputChange={handleTransicaoSimboloInputChange}
        handleTransicaoEstadoDestinoInputChange={
          handleTransicaoEstadoDestinoInputChange
        }
        handleAddInput={handleAddTransicaoInput}
      />

      {estadosInputs[0].value != "" && (
        <div className="estado-inicial-e-finais-row">
          <EstadoSelectable
            handleEstadoInicialChange={handleEstadoInicialChange}
            estadoInicialSelecionado={estadoInicial}
            estados={estadosInputs}
          />

          <EstadosSelectable
            estados={estadosInputs}
            handleEstadoDestinoChange={handleEstadoDestinoChange}
            listaComEstadosSelecionados={estadosDestinoSelecionados}
          />
        </div>
      )}
    </div>
  );
}
