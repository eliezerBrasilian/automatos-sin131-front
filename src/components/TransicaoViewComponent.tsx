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
      <p style={{ textAlign: "left" }}>Informe a transição</p>
      <div style={{ display: "flex", flexDirection: "column", rowGap: 15 }}>
        {transicoes?.map((v) => (
          <div
            style={{
              display: "flex",
              columnGap: 50,
            }}
          >
            <Circulo valor={v.estadoAtual.nome} />
            <p style={{ marginTop: -3, marginLeft: -1 }}>{v.simboloEntrada}</p>

            <Circulo valor={v.estadoDestino.nome} />
          </div>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",

          paddingRight: 30,
        }}
      >
        <img src={seta} style={{ height: 30, width: 40, marginTop: -40 }} />
      </div>
    </div>
  );
}

function Circulo({ valor }) {
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
      <p>{valor}</p>
    </div>
  );
}
