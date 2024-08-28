import { Afn } from "../types/Afn";

export function mapAfnToCytoscapeElements(afn: Afn) {
  // Mapeando os estados para nós (nodes)
  const nodes = afn.conjuntoEstados.map((estado, index) => ({
    data: {
      id: estado.nome,
      label: estado.nome,
      isFinalState: afn.estadosFinais.some(
        (finalState) => finalState.nome === estado.nome
      )
        ? "true"
        : "false", // Verifica se o estado é final
    },
    position: { x: 100 + index * 150, y: 100 },
  }));

  // Mapeando as transições para arestas (edges)
  const edges = afn.conjuntoTransicoes.map((transicao) => ({
    data: {
      source: transicao.estadoAtual.nome,
      target: transicao.estadoDestino.nome,
      label: transicao.simboloEntrada,
    },
  }));

  // Combina nós e arestas em um único array de elementos
  return [...nodes, ...edges];
}
