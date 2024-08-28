import { createContext, ReactNode, useContext, useState } from "react";
import { Afn } from "../types/Afn";
import { InputItem } from "../types/InputItem";
import { TransicaoItem } from "../types/TransicaoItem";
import { getAfn } from "../data/data";
import { AutomatoService } from "../services/AutomatoService";
import { EstadoItem } from "../types/EstadoItem";

type AppProviderProps = {
  children: ReactNode;
};

interface AfnContextInterface {
  afdConvertedFromAfn: Afn | null;
  alfabetoInputs: InputItem[];
  inputs: InputItem[];
  estadoInicial: string;
  transicaoInputs: TransicaoItem[];
  estadosDestinoSelecionados: EstadoItem[];
  automatoAccepted: WordStatus;
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
  updateAfd(afn: Afn): void;
  clickFillAutomato: () => void;
  handleClickConvertAfnToAfd: () => Promise<void>;
  simulateAccepting: (palavra: string) => Promise<void>;
  resetStatusOfWordAccepted: () => void;
}

export enum WordStatus {
  ACCEPTED,
  REJECTED,
  IDLE,
}

export const AfnContext = createContext<AfnContextInterface | undefined>(
  undefined
);

export function useAfnContext() {
  const context = useContext(AfnContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return context;
}

export function AfnContextProvider({ children }: AppProviderProps) {
  const [afdConvertedFromAfn, setAfdConvertedFromAfn] = useState<Afn | null>(
    null
  );

  const [alfabetoInputs, setAlfabetoInputs] = useState<InputItem[]>([
    { id: 0, value: "" },
  ]);

  const [inputs, setInputs] = useState<InputItem[]>([{ id: 0, value: "" }]);
  const [estadoInicial, setEstadoInicial] = useState("");

  const [transicaoInputs, setTransicaoInputs] = useState<TransicaoItem[]>([
    {
      id: 0,
      estadoAtualValue: "",
      simboloEntradaValue: "",
      estadoDestinoValue: "",
    },
  ]);

  const [estadosDestinoSelecionados, setEstadosDestinoSelecionados] = useState<
    EstadoItem[]
  >([]);

  const [automatoAccepted, setAutomatoAccept] = useState<WordStatus>(
    WordStatus.IDLE
  );

  const automatosService = new AutomatoService();

  const handleAlfabetoInputChange = (id: number, value: string) => {
    setAlfabetoInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const handleAddAlfabetoInput = () => {
    const lastInput = alfabetoInputs[alfabetoInputs.length - 1];
    if (lastInput.value.trim() !== "") {
      setAlfabetoInputs((prevInputs) => [
        ...prevInputs,
        { id: prevInputs.length, value: "" },
      ]);
    }
  };

  const fillAlfabetoInputs = () => {
    setAlfabetoInputs([
      { id: 0, value: "a" },
      { id: 1, value: "b" },
    ]);
  };

  function updateAfd(afn: Afn) {
    setAfdConvertedFromAfn(afn);
  }

  const handleInputChange = (id: number, value: string) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const handleAddInput = () => {
    const lastInput = inputs[inputs.length - 1];
    if (lastInput.value.trim() !== "") {
      setInputs((prevInputs) => [
        ...prevInputs,
        { id: prevInputs.length, value: "" },
      ]);
    }
  };

  const fillInputs = () => {
    setInputs([
      { id: 0, value: "q1" },
      { id: 1, value: "q2" },
      { id: 2, value: "q3" },
      { id: 3, value: "q4" },
    ]);
  };

  const handleEstadoInicialChange = (value: string) => {
    setEstadoInicial(value);
  };

  const handleEstadoAtualInputChange = (
    id: number,
    estadoAtualValue: string
  ) => {
    setTransicaoInputs((prevInputs) => {
      return prevInputs.map((input) =>
        input.id === id
          ? { ...input, estadoAtualValue: estadoAtualValue }
          : input
      );
    });
  };

  const handleAddTransicaoInput = () => {
    const lastInput = transicaoInputs[transicaoInputs.length - 1];
    if (lastInput.estadoAtualValue.trim() !== "") {
      setTransicaoInputs((prevInputs) => [
        ...prevInputs,
        {
          id: prevInputs.length,
          estadoAtualValue: "",
          simboloEntradaValue: "",
          estadoDestinoValue: "",
        },
      ]);
    }
  };

  const handleEstadoDestinoInputChange = (
    id: number,
    estadoDestinoValue: string
  ) => {
    setTransicaoInputs((prevInputs) => {
      return prevInputs.map((input) =>
        input.id === id
          ? { ...input, estadoDestinoValue: estadoDestinoValue }
          : input
      );
    });
  };

  const handleSimboloInputChange = (
    id: number,
    simboloEntradaValue: string
  ) => {
    setTransicaoInputs((prevInputs) => {
      return prevInputs.map((input) =>
        input.id === id
          ? { ...input, simboloEntradaValue: simboloEntradaValue }
          : input
      );
    });
  };

  const fillTransicoes = () => {
    setTransicaoInputs([
      {
        id: 0,
        estadoAtualValue: "q1",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q2",
      },
      {
        id: 1,
        estadoAtualValue: "q1",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q3",
      },
      {
        id: 2,
        estadoAtualValue: "q2",
        simboloEntradaValue: "b",
        estadoDestinoValue: "q2",
      },
      {
        id: 3,
        estadoAtualValue: "q2",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q4",
      },
      {
        id: 4,
        estadoAtualValue: "q4",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q3",
      },
      {
        id: 5,
        estadoAtualValue: "q4",
        simboloEntradaValue: "b",
        estadoDestinoValue: "q2",
      },
      {
        id: 6,
        estadoAtualValue: "q3",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q3",
      },
      {
        id: 7,
        estadoAtualValue: "q3",
        simboloEntradaValue: "b",
        estadoDestinoValue: "q2",
      },
    ]);
  };

  const clickFillAutomato = () => {
    fillInputs();
    fillAlfabetoInputs();
    fillTransicoes();
    setEstadoInicial("q1");
  };

  const handleClickConvertAfnToAfd = async () => {
    const afn = getAfn(
      alfabetoInputs,
      inputs,
      transicaoInputs,
      estadoInicial,
      estadosDestinoSelecionados
    );

    try {
      const afdResultante = await automatosService.convertAfnToAfd(afn);
      //setAfdConvertedFromAfn(afdResultante);
      updateAfd(afdResultante);
      console.log(afdResultante.estadosFinais);
    } catch (error) {
      alert("Erro ao realizar conversão");
    }
  };

  const handleEstadoDestinoChange = (id: number, value: string) => {
    setEstadosDestinoSelecionados((prevInputs) => {
      const alreadyAdded = prevInputs.find((v) => v.id == id);

      if (alreadyAdded != undefined) {
        return prevInputs.filter((v) => v.id != id);
      } else {
        const newList = prevInputs.map((v) => v);

        newList.push({ id: id, value: value });

        return newList;
      }
    });
  };

  const simulateAccepting = async (palavra: string) => {
    if (afdConvertedFromAfn != null) {
      const afdIsAccepted_ = await automatosService.simulateAcceptingAfd(
        afdConvertedFromAfn,
        palavra
      );

      if (afdIsAccepted_) setAutomatoAccept(WordStatus.ACCEPTED);
      else setAutomatoAccept(WordStatus.REJECTED);
    }
  };

  const resetStatusOfWordAccepted = () => {
    setAutomatoAccept(WordStatus.IDLE);
  };

  return (
    <AfnContext.Provider
      value={{
        afdConvertedFromAfn,
        updateAfd,
        alfabetoInputs,
        handleAddAlfabetoInput,
        handleAlfabetoInputChange,
        fillAlfabetoInputs,
        inputs,
        handleInputChange,
        handleAddInput,
        fillInputs,
        estadoInicial,
        handleEstadoInicialChange,
        handleEstadoAtualInputChange,
        handleAddTransicaoInput,
        handleEstadoDestinoInputChange,
        handleSimboloInputChange,
        fillTransicoes,
        transicaoInputs,
        clickFillAutomato,
        handleClickConvertAfnToAfd,
        estadosDestinoSelecionados,
        handleEstadoDestinoChange,
        simulateAccepting,
        automatoAccepted,
        resetStatusOfWordAccepted,
      }}
    >
      {children}
    </AfnContext.Provider>
  );
}
