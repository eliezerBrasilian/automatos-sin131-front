import { Afn } from "../types/Afn";
import { Estado } from "../types/Estado";
import { EstadoItem } from "../types/EstadoItem";
import { InputItem } from "../types/InputItem";
import { Transicao } from "../types/Transicao";
import { TransicaoItem } from "../types/TransicaoItem";

export const transicaoItensToEstados = (elements: TransicaoItem[]) => {
  var list: Transicao[] = [];

  elements.forEach((v) => {
    const eA: Estado = {
      nome: v.estadoAtualValue,
    };
    const eD: Estado = {
      nome: v.estadoDestinoValue,
    };

    list.push({
      estadoAtual: eA,
      simboloEntrada: v.simboloEntradaValue,
      estadoDestino: eD,
    });
  });

  return list;
};

export const inputItemsToEstados = (inputsItems: InputItem[]) => {
  var estados: Estado[] = [];

  inputsItems.forEach((v) => {
    estados.push({
      nome: v.value,
    });
  });

  return estados;
};

export const getAfn = (
  alfabetoInputs: InputItem[],
  estadoInputs: InputItem[],
  transicaoInputs: TransicaoItem[],
  estadoInicial: string,
  estadosDestinoSelecionados: EstadoItem[]
) => {
  const afn: Afn = {
    alfabeto: {
      caracteres: alfabetoInputs.map((v) => v.value),
    },
    conjuntoEstados: inputItemsToEstados(estadoInputs),
    conjuntoTransicoes: transicaoItensToEstados(transicaoInputs),
    estadoInicial: { nome: estadoInicial },
    estadosFinais: inputItemsToEstados(estadosDestinoSelecionados),
  };

  return afn;
};

interface defaultAfnProps {
  alfabetoInputs: InputItem[];
  estadoInputs: InputItem[];
  transicaoInputs: TransicaoItem[];
  estadoInicial: string;
  estadosDestinoSelecionados: EstadoItem[];
}

function defaultInputsAfn(): defaultAfnProps {
  return {
    alfabetoInputs: [
      {
        id: 0,
        value: "a",
      },
      { id: 1, value: "b" },
    ],
    estadoInputs: [
      {
        id: 0,
        value: "q0",
      },
      { id: 1, value: "q1" },
    ],
    estadoInicial: "q0",
    estadosDestinoSelecionados: [
      {
        id: 0,
        value: "q1",
      },
    ],
    transicaoInputs: [
      {
        id: 1,
        estadoAtualValue: "q0",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q1",
      },
      {
        id: 2,
        estadoAtualValue: "q0",
        simboloEntradaValue: "b",
        estadoDestinoValue: "q1",
      },
      {
        id: 3,
        estadoAtualValue: "q1",
        simboloEntradaValue: "a",
        estadoDestinoValue: "q1",
      },
    ],
  };
}

export const getDefaultInputsAfn = defaultInputsAfn();
export const getCustomAfn = getAfn(
  getDefaultInputsAfn.alfabetoInputs,
  getDefaultInputsAfn.estadoInputs,
  getDefaultInputsAfn.transicaoInputs,
  getDefaultInputsAfn.estadoInicial,
  getDefaultInputsAfn.estadosDestinoSelecionados
);
