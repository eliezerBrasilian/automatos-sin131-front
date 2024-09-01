import { WordStatus } from "../data/enums/WordStatus";
import { Afn } from "../types/Afn";
import { EstadoItem } from "../types/EstadoItem";
import { InputItem } from "../types/InputItem";
import { TransicaoItem } from "../types/TransicaoItem";
import { EquivalencyState } from "./EquivalencyState";

export interface AfnContextInterface {
  afdConvertedFromAfn: Afn | null;
  alfabetoInputs: InputItem[];
  inputs: InputItem[];
  estadoInicial: string;
  transicaoInputs: TransicaoItem[];
  estadosDestinoSelecionados: EstadoItem[];
  automatoAccepted: WordStatus;
  minimizedAfd?: Afn;
  equivalencyState: EquivalencyState;
  handleAlfabetoInputChange: (id: number, value: string) => void;
  handleInputChange: (id: number, value: string) => void;
  handleEstadoInicialChange: (value: string) => void;
  handleEstadoAtualInputChange: (id: number, estadoAtualValue: string) => void;
  handleSimboloInputChange: (id: number, simboloEntradaValue: string) => void;
  handleEstadoDestinoInputChange: (
    id: number,
    estadoDestinoValue: string
  ) => void;
  handleEstadoDestinoChange: (id: number, value: string) => void;
  handleAddAlfabetoInput: () => void;
  handleAddInput: () => void;
  handleAddTransicaoInput: () => void;
  fillAlfabetoInputs: () => void;
  fillInputs: () => void;
  fillTransicoes: () => void;
  clickFillAutomato: () => void;
  handleClickConvertAfnToAfd: () => Promise<void>;
  simulateAccepting: (palavra: string) => Promise<void>;
  reset: () => void;
  minimizeAfd: () => Promise<void>;
  testEquivalency: (word: string) => Promise<void>;
  minimizeAfdSemTerConvertidoAntes: () => Promise<void>;
}
