import { Alfabeto } from "./Alfabeto";
import { Estado } from "./Estado";
import { Transicao } from "./Transicao";

export interface Afn {
  conjuntoEstados: Estado[]; //ok
  alfabeto: Alfabeto;
  conjuntoTransicoes: Transicao[];
  estadoInicial: Estado;
  estadosFinais: Estado[];
}
