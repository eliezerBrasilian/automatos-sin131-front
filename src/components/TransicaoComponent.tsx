import { TransicaoItem } from "../App";
import { ButtonAdd } from "./BtnAdd";

interface TransicaoComponentProps {
  inputs: TransicaoItem[];
  handleTransicaoEstadoAtualInputChange: (
    id: number,
    estadoAtualValue: string
  ) => void;
  handleTransicaoSimboloInputChange: (
    id: number,
    simboloEntradaValue: string
  ) => void;
  handleTransicaoEstadoDestinoInputChange: (
    id: number,
    estadoDestinoValue: string
  ) => void;
  handleAddInput: () => void;
}

export const getCaracter = (id: number) => {
  if (id == 0) return "a";
  if (id == 1) return "b";
  if (id == 2) return "c";
  if (id == 3) return "d";
  if (id == 4) return "e";
  if (id == 5) return "f";
  if (id == 6) return "g";
};

export function TransicaoComponent({
  inputs,
  handleTransicaoEstadoAtualInputChange,
  handleTransicaoSimboloInputChange,
  handleTransicaoEstadoDestinoInputChange,
  handleAddInput,
}: TransicaoComponentProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Informe a transição</p>
      <div style={{ display: "flex", columnGap: 10 }}>
        <div style={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
          {inputs.map((v) => (
            <div style={{ display: "flex", columnGap: 5 }}>
              <input
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                type="text"
                placeholder={`q${v.id}`}
                value={v.estadoAtualValue}
                onChange={(e) =>
                  handleTransicaoEstadoAtualInputChange(v.id, e.target.value)
                }
              />
              <input
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                type="text"
                placeholder={getCaracter(v.id)}
                value={v.simboloEntradaValue}
                onChange={(e) =>
                  handleTransicaoSimboloInputChange(v.id, e.target.value)
                }
              />

              <input
                style={{
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                type="text"
                placeholder={`q${v.id + 1}`}
                value={v.estadoDestinoValue}
                onChange={(e) =>
                  handleTransicaoEstadoDestinoInputChange(v.id, e.target.value)
                }
              />
            </div>
          ))}
        </div>
        <ButtonAdd onClick={handleAddInput} />
      </div>
    </div>
  );
}
