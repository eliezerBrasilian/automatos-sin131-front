import { useState } from "react";
import "./App.css";
import { MainContent } from "./components/MainContent";
import { getAfn } from "./data/data";
import { AutomatoService } from "./services/AutomatoService";
import { Afn } from "./types/Afn";
import { EstadoItem } from "./types/EstadoItem";
import { InputItem } from "./types/InputItem";
import { TransicaoItem } from "./types/TransicaoItem";

function App() {
  const [start, setStart] = useState(true);
  const [afnContentInputIsVisible, setAfnContentInputVisible] = useState(false);
  const [indexSelected, setIndexSelected] = useState(-1);

  const [inputs, setEstadoInputs] = useState<InputItem[]>([
    { id: 0, value: "" },
  ]);

  const [alfabetoInputs, setAlfabetoInputs] = useState<InputItem[]>([
    { id: 0, value: "" },
  ]);

  const [afd, setAfd] = useState<Afn>();
  const [afdMinimized, setAfdMinimized] = useState<Afn>();

  const [transicaoInputs, setTransicaoInputs] = useState<TransicaoItem[]>([
    {
      id: 0,
      estadoAtualValue: "",
      simboloEntradaValue: "",
      estadoDestinoValue: "",
    },
  ]);

  const [estadoInicial, setEstadoInicial] = useState("");

  const [estadosDestinoSelecionados, setEstadosDestinoSelecionados] = useState<
    EstadoItem[]
  >([]);

  const [palavra, setPalavra] = useState("");

  const clickFillAutomato = () => {
    setEstadoInputs([
      { id: 0, value: "q1" },
      { id: 1, value: "q2" },
      { id: 2, value: "q3" },
      { id: 3, value: "q4" },
    ]);

    setAlfabetoInputs([
      { id: 0, value: "a" },
      { id: 1, value: "b" },
    ]);

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

    setEstadoInicial("q1");
  };

  const [canShowRestButtonItens, setCanShowRestButtonItens] = useState(false);

  const [afnAccepted, setAfnAccepted] = useState<undefined | boolean>(
    undefined
  );
  const [afdAccepted, setAfdAccepted] = useState<undefined | boolean>(
    undefined
  );

  const automatosService = new AutomatoService();

  const createNewAfn = () => {
    setAfnContentInputVisible(true);
    setEstadoInputs([{ id: 0, value: "" }]);
    setAlfabetoInputs([{ id: 0, value: "" }]);
    setAfd(undefined);
    setAfdMinimized(undefined);
    setTransicaoInputs([
      {
        id: 0,
        estadoAtualValue: "",
        simboloEntradaValue: "",
        estadoDestinoValue: "",
      },
    ]);
    setEstadoInicial("");
    setEstadosDestinoSelecionados([]);
    setPalavra("");
    setCanShowRestButtonItens(false);
  };

  const convertAfnToAfd = () => {
    setIndexSelected(0);
    if (start) {
      setAfnContentInputVisible(true);
      setStart(false);
    } else {
      setAfnContentInputVisible(false);
    }
  };

  const minimizeAfd = async () => {
    setIndexSelected(1);
    setAfnContentInputVisible(false);

    if (afd != undefined) {
      const afdMinimized_ = await automatosService.minimizeAfd(afd);
      console.log("minimizado");
      console.log(afdMinimized_);
      setAfdMinimized(afdMinimized_);
    }
  };

  const handleMenuSimulate = () => {
    setIndexSelected(2);
    setAfnContentInputVisible(false);
  };

  const simulateAccepting = async () => {
    if (afd != undefined) {
      const afn = getAfn(
        alfabetoInputs,
        inputs,
        transicaoInputs,
        estadoInicial,
        estadosDestinoSelecionados
      );

      const afdIsAccepted_ = await automatosService.simulateAcceptingAfd(
        afd,
        palavra
      );
      const afnIsAccepted_ = await automatosService.simulateAcceptingAfn(
        afn,
        palavra
      );

      setAfdAccepted(afdIsAccepted_);
      setAfnAccepted(afnIsAccepted_);
    }
  };

  const testEquivalency = () => {
    setIndexSelected(3);
  };

  const handleInputChange = (id: number, value: string) => {
    setEstadoInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const handleAddInput = () => {
    const lastInput = inputs[inputs.length - 1];
    if (lastInput.value.trim() !== "") {
      setEstadoInputs((prevInputs) => [
        ...prevInputs,
        { id: prevInputs.length, value: "" },
      ]);
    }
  };

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

  const handleTransicaoEstadoAtualInputChange = (
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

  const handleTransicaoSimboloInputChange = (
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

  const handleTransicaoEstadoDestinoInputChange = (
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

  const handleEstadoInicialChange = (value: string) => {
    setEstadoInicial(value);
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

  const handleClickConvertAfnToAfd = async () => {
    const alfabetoIsFilled = alfabetoInputs.every((v) => v.value != "");
    const inputsIsFilled = inputs.every((v) => v.value != "");
    const transicoesIsFilled = alfabetoInputs.every((v) => v.value != "");
    const estadosDestinoSelecionadosIsFilled = alfabetoInputs.every(
      (v) => v.value != ""
    );

    if (
      alfabetoIsFilled &&
      inputsIsFilled &&
      transicoesIsFilled &&
      estadoInicial != "" &&
      estadosDestinoSelecionadosIsFilled
    ) {
      const afn = getAfn(
        alfabetoInputs,
        inputs,
        transicaoInputs,
        estadoInicial,
        estadosDestinoSelecionados
      );

      const afd_ = await automatosService.convertAfnToAfd(afn);
      setCanShowRestButtonItens(true);
      setAfnContentInputVisible(false);

      console.log("--------afd resultante----------");
      console.log(afd_);

      setAfd(afd_);
      setIndexSelected(0);
    } else {
      alert("Preencha todos os campos corretamente");
    }
  };

  return (
    <MainContent
      indexSelected={indexSelected}
      afnContentInputIsVisible={afnContentInputIsVisible}
      convertAfnToAfd={convertAfnToAfd}
      handleAddAlfabetoInput={handleAddAlfabetoInput}
      handleAddInput={handleAddInput}
      handleAddTransicaoInput={handleAddTransicaoInput}
      handleAlfabetoInputChange={handleAlfabetoInputChange}
      handleEstadoDestinoChange={handleEstadoDestinoChange}
      handleEstadoInicialChange={handleEstadoInicialChange}
      handleInputChange={handleInputChange}
      handleTransicaoEstadoAtualInputChange={
        handleTransicaoEstadoAtualInputChange
      }
      handleTransicaoEstadoDestinoInputChange={
        handleTransicaoEstadoDestinoInputChange
      }
      handleTransicaoSimboloInputChange={handleTransicaoSimboloInputChange}
      minimizeAfd={minimizeAfd}
      simulateAccepting={simulateAccepting}
      testEquivalency={testEquivalency}
      setPalavra={setPalavra}
      alfabetoInputs={alfabetoInputs}
      estadoInicial={estadoInicial}
      estadosDestinoSelecionados={estadosDestinoSelecionados}
      estadosInputs={inputs}
      palavra={palavra}
      transicaoInputs={transicaoInputs}
      canShowRestButtonItens={canShowRestButtonItens}
      //
      afd={afd}
      afdMinimized={afdMinimized}
      afnAccepted={afnAccepted}
      afdAccepted={afdAccepted}
      handleMenuSimulate={handleMenuSimulate}
      createNewAfn={createNewAfn}
      handleClickConvertAfnToAfd={handleClickConvertAfnToAfd}
      clickFillAutomato={clickFillAutomato}
    />
  );
}

export default App;
