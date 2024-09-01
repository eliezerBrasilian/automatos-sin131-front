import { EstadoItem } from "./EstadoItem";
import { InputItem } from "./InputItem";
import { TransicaoItem } from "./TransicaoItem";

export interface AfnComponentProps {
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
