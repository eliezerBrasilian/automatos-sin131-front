import { useMemo } from "react";
import { getAfn } from "../data/data";
import { AutomatoService } from "../services/AutomatoService";
import { Afn } from "../types/Afn";
import { EstadoItem } from "../types/EstadoItem";
import { InputItem } from "../types/InputItem";
import { TransicaoItem } from "../types/TransicaoItem";

export function useActionButton(
  indexSelected: number,
  setCanShowRestButtonItens: (value: React.SetStateAction<boolean>) => void,
  setAfnContentInputVisible: (value: React.SetStateAction<boolean>) => void,
  setCanShowAfd: (value: React.SetStateAction<boolean>) => void,
  setAfd: (value: React.SetStateAction<Afn | undefined>) => void,
  automatosService: AutomatoService,
  alfabetoInputs: InputItem[],
  inputs: InputItem[],
  transicaoInputs: TransicaoItem[],
  estadoInicial: string,
  estadosDestinoSelecionados: EstadoItem[],
  palavra: string
) {
  return useMemo(() => {
    if (indexSelected == 0)
      return {
        text: "Converter para AFD",
        onClick: async () => {
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
          setCanShowAfd(true);
          setAfd(afd_);
        },
      };
    else if (indexSelected == 1)
      return {
        text: "Minimizar",
        onClick: async () => {
          const afd = getAfn(
            alfabetoInputs,
            inputs,
            transicaoInputs,
            estadoInicial,
            estadosDestinoSelecionados
          );

          await automatosService.minimizeAfd(afd);
        },
      };
    else if (indexSelected == 2)
      return {
        text: "Simular Aceitação",

        onClick: async () => {
          const afn = getAfn(
            alfabetoInputs,
            inputs,
            transicaoInputs,
            estadoInicial,
            estadosDestinoSelecionados
          );

          await automatosService.simulateAcceptingAfn(afn, palavra);
        },
      };
    else
      return {
        text: "Testar equivalência",
        onClick: async () => {},
      };
  }, [
    indexSelected,
    inputs,
    transicaoInputs,
    estadoInicial,
    estadosDestinoSelecionados,
  ]);
}
