import { Afn } from "./Afn";
import { EstadoItem } from "./EstadoItem";
import { InputItem } from "./InputItem";
import { TransicaoItem } from "./TransicaoItem";

export interface MainContentProps {
  afnContentInputIsVisible: boolean;
  indexSelected: number;
  palavra: string;
  estadoInicial: string;
  alfabetoInputs: InputItem[];
  estadosInputs: InputItem[];
  transicaoInputs: TransicaoItem[];
  estadosDestinoSelecionados: EstadoItem[];
  setPalavra: React.Dispatch<React.SetStateAction<string>>;
  convertAfnToAfd: () => void;
  minimizeAfd: () => void;
  simulateAccepting: () => void;
  testEquivalency: () => void;
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
  canShowRestButtonItens: boolean;
  //
  afd: Afn | undefined;
  afdMinimized: Afn | undefined;
  afnAccepted?: boolean;
  afdAccepted?: boolean;
  handleMenuSimulate: () => void;
  createNewAfn: () => void;
  handleClickConvertAfnToAfd: () => Promise<void>;
}
