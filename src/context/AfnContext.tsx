import { createContext, ReactNode, useContext, useState } from "react";
import { Afn } from "../types/Afn";
import { InputItem } from "../types/InputItem";
import { TransicaoItem } from "../types/TransicaoItem";
import { getAfn } from "../data/data";
import { AutomatoService } from "../services/AutomatoService";
import { EstadoItem } from "../types/EstadoItem";
import { WordStatus } from "../data/enums/WordStatus";
import { EquivalencyState } from "./EquivalencyState";
import { AfnContextInterface } from "./AfnContextInterface";

type AppProviderProps = {
  children: ReactNode;
};

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
  const [equivalencyState, setEquivalencyState] = useState<EquivalencyState>({
    afdConvertedFromAfn: WordStatus.IDLE,
    originalAfn: WordStatus.IDLE,
  });

  const [minimizedAfd, setMinimizedAfd] = useState<Afn>();

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

  const clickFillAutomato = () => {
    fillInputs();
    fillAlfabetoInputs();
    fillTransicoes();
    setEstadoInicial("q1");
  };

  const clickFillAutomatoAfd = () => {
    setInputs([
      { id: 0, value: "s0" },
      { id: 1, value: "s1" },
      { id: 2, value: "s2" },
      { id: 3, value: "s3" },
      { id: 4, value: "s4" },
    ]);

    setAlfabetoInputs([
      { id: 0, value: "a" },
      { id: 1, value: "b" },
    ]);

    setTransicaoInputs([
      {
        id: 0,
        estadoAtualValue: "s0",
        simboloEntradaValue: "a",
        estadoDestinoValue: "s1",
      },
      {
        id: 1,
        estadoAtualValue: "s0",
        simboloEntradaValue: "b",
        estadoDestinoValue: "s2",
      },
      {
        id: 2,
        estadoAtualValue: "s1",
        simboloEntradaValue: "a",
        estadoDestinoValue: "s1",
      },
      {
        id: 3,
        estadoAtualValue: "s1",
        simboloEntradaValue: "b",
        estadoDestinoValue: "s3",
      },
      {
        id: 4,
        estadoAtualValue: "s2",
        simboloEntradaValue: "a",
        estadoDestinoValue: "s1",
      },
      {
        id: 5,
        estadoAtualValue: "s2",
        simboloEntradaValue: "b",
        estadoDestinoValue: "s2",
      },
      {
        id: 6,
        estadoAtualValue: "s3",
        simboloEntradaValue: "a",
        estadoDestinoValue: "s1",
      },
      {
        id: 7,
        estadoAtualValue: "s3",
        simboloEntradaValue: "b",
        estadoDestinoValue: "s4",
      },
      {
        id: 8,
        estadoAtualValue: "s4",
        simboloEntradaValue: "a",
        estadoDestinoValue: "s1",
      },
      {
        id: 9,
        estadoAtualValue: "s4",
        simboloEntradaValue: "b",
        estadoDestinoValue: "s2",
      },
    ]);

    setEstadoInicial("s0");
  };

  const fillInputs = () => {
    setInputs([
      { id: 0, value: "q1" },
      { id: 1, value: "q2" },
      { id: 2, value: "q3" },
      { id: 3, value: "q4" },
    ]);
  };

  const fillAlfabetoInputs = () => {
    setAlfabetoInputs([
      { id: 0, value: "a" },
      { id: 1, value: "b" },
    ]);
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

      setAfdConvertedFromAfn(afdResultante);
      console.log("----------convertido");
      console.log(afdResultante);
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

  const reset = () => {
    setAutomatoAccept(WordStatus.IDLE);
    setEquivalencyState({
      afdConvertedFromAfn: WordStatus.IDLE,
      originalAfn: WordStatus.IDLE,
    });
  };

  const clearAll = () => {
    setAutomatoAccept(WordStatus.IDLE);
    setEquivalencyState({
      afdConvertedFromAfn: WordStatus.IDLE,
      originalAfn: WordStatus.IDLE,
    });

    setAfdConvertedFromAfn(null);
    setAlfabetoInputs([{ id: 0, value: "" }]);

    setInputs([{ id: 0, value: "" }]);
    setEstadoInicial("");
    setTransicaoInputs([
      {
        id: 0,
        estadoAtualValue: "",
        simboloEntradaValue: "",
        estadoDestinoValue: "",
      },
    ]);
    setEstadosDestinoSelecionados([]);
    setAutomatoAccept(WordStatus.IDLE);
    setEquivalencyState({
      afdConvertedFromAfn: WordStatus.IDLE,
      originalAfn: WordStatus.IDLE,
    });
    setMinimizedAfd(undefined);
  };

  const minimizeAfd = async () => {
    if (afdConvertedFromAfn != undefined) {
      const afdMinimized_ = await automatosService.minimizeAfd(
        afdConvertedFromAfn
      );
      console.log("minimizado");
      console.log(afdMinimized_);
      setMinimizedAfd(afdMinimized_);
    }
  };

  const minimizeAfdSemTerConvertidoAntes = async () => {
    const afn = getAfn(
      alfabetoInputs,
      inputs,
      transicaoInputs,
      estadoInicial,
      estadosDestinoSelecionados
    );

    console.log(afn);

    const afdMinimized_ = await automatosService.minimizeAfd(afn);
    console.log("minimizado");
    console.log(afdMinimized_);
    setMinimizedAfd(afdMinimized_);
  };

  async function testEquivalency(word: string) {
    const afn = getAfn(
      alfabetoInputs,
      inputs,
      transicaoInputs,
      estadoInicial,
      estadosDestinoSelecionados
    );

    const afnAccepted = await automatosService.simulateAcceptingAfn(afn, word);
    const afdAccepted = await automatosService.simulateAcceptingAfd(
      afdConvertedFromAfn,
      word
    );

    setEquivalencyState({
      originalAfn: afnAccepted ? WordStatus.ACCEPTED : WordStatus.REJECTED,
      afdConvertedFromAfn: afdAccepted
        ? WordStatus.ACCEPTED
        : WordStatus.REJECTED,
    });
  }

  return (
    <AfnContext.Provider
      value={{
        afdConvertedFromAfn,
        // updateAfd,
        alfabetoInputs,
        minimizedAfd,
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
        reset,
        minimizeAfd,
        testEquivalency,
        equivalencyState,
        minimizeAfdSemTerConvertidoAntes,
        clickFillAutomatoAfd,
        clearAll,
      }}
    >
      {children}
    </AfnContext.Provider>
  );
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
