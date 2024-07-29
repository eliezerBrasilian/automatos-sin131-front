import seta from "../assets/right-arrow_white.png";
import { Transicao } from "../types/Transicao";

interface TransicaoViewComponentProps {
  transicoes?: Transicao[];
}

export function TransicaoViewComponent({
  transicoes,
}: TransicaoViewComponentProps) {
  return (
    <div
      style={{
        marginTop: 30,
        width: 240,
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
        {transicoes?.map((v, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: 10, // Ajuste o espaçamento entre os elementos
            }}
          >
            <Circulo valor={v.estadoAtual.nome} />
            <p style={{ marginTop: -30, marginLeft: 10 }}>{v.simboloEntrada}</p>

            {/* Exibe a seta apenas se não for o último item */}
            {index < transicoes.length - 0 && (
              <img
                src={seta}
                style={{ height: 30, width: 30, marginLeft: -25 }}
                alt="Seta"
              />
            )}

            <Circulo valor={v.estadoDestino.nome} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Circulo({ valor }: { valor: string }) {
  return (
    <div
      style={{
        padding: 5,
        borderRadius: 50,
        width: 35,
        height: 35,
        backgroundColor: "#C42348",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ margin: 0, color: "#fff" }}>{valor}</p>
    </div>
  );
}
