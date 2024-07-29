import { Alfabeto } from "../types/Alfabeto";
import { Estado } from "../types/Estado";
import { Transicao } from "../types/Transicao";
import { AlfabetoViewComponent } from "./AlfabetoViewComponent";
import { EstadoInicial } from "./EstadoInicial";
import { EstadosViewComponent } from "./EstadosViewComponent";
import { TransicaoViewComponent } from "./TransicaoViewComponent";

interface AfdResultanteComponentProps {
  estadoInicial: string;
  estadosFinais: Estado[];
  alfabeto: Alfabeto;
  transicoes: Transicao[];
  title: string;
  isAccepted?: boolean;
}

export function AfdResultanteComponent({
  alfabeto,
  estadoInicial,
  estadosFinais,
  transicoes,
  title,
  isAccepted,
}: AfdResultanteComponentProps) {
  return (
    <div>
      <p>{title}</p>
      {isAccepted != undefined && (
        <div
          style={{
            backgroundColor: "#F1E9DB",
            width: 170,
            height: 40,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 12,
          }}
        >
          <p>{isAccepted}</p>
        </div>
      )}

      <div className="estado-alfabeto-row">
        <EstadoInicial estadoInicial={estadoInicial} />
        <EstadosViewComponent estados={estadosFinais} />
        <AlfabetoViewComponent alfabeto={alfabeto} />
      </div>
      <TransicaoViewComponent transicoes={transicoes} />
    </div>
  );
}
