import { Estado } from "./Estado";

export interface Transicao {
  estadoAtual: Estado;
  simboloEntrada: string;
  estadoDestino: Estado;
}
