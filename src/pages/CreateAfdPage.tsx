import { useState } from "react";
import { InputItem } from "../types/InputItem";
import { TransicaoItem } from "../types/TransicaoItem";
import { EstadoSelectable } from "../components/EstadoSelectable";
import { TransicaoComponent } from "../components/TransicaoComponent";
import { EstadosSelectable } from "../components/EstadosSelectable";
import { EstadosComponent } from "../components/EstadosComponent";
import { AlfabetoComponent } from "../components/AlfabetoComponent";
import { EstadoItem } from "../types/EstadoItem";

export function CreateAfdPage() {
  const [estadoInicial, setEstadoInicial] = useState("");
  const [inputs, setEstadoInputs] = useState<InputItem[]>([
    { id: 0, value: "" },
  ]);

  const [alfabetoInputs, setAlfabetoInputs] = useState<InputItem[]>([
    { id: 0, value: "" },
  ]);

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

  const handleEstadoInicialChange = (value: string) => {
    setEstadoInicial(value);
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

  const handleInputChange = (id: number, value: string) => {
    setEstadoInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  return (
    <div className="afd-page">
      <h1>Aréa de criação do Autômato Finito Deterministico (AFD)</h1>

      <div className="menu-container" style={{ height: "fit-content" }}>
        <div className="estado-alfabeto-row">
          <EstadosComponent
            inputs={inputs}
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

        <div className="estado-inicial-e-finais-row">
          <EstadoSelectable
            handleEstadoInicialChange={handleEstadoInicialChange}
            estadoInicialSelecionado={estadoInicial}
            estados={inputs}
          />

          <EstadosSelectable
            estados={inputs}
            handleEstadoDestinoChange={handleEstadoDestinoChange}
            listaComEstadosSelecionados={estadosDestinoSelecionados}
          />
        </div>

        <div className="btns-container">
          <button>Minimizar AFD</button>
          <button onClick={clickFillAutomato}>Preencher Automaticamente</button>
        </div>
      </div>
    </div>
  );
}
