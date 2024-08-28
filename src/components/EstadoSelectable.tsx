import { InputItem } from "../types/InputItem";

interface EstadoSelectableProps {
  estados: InputItem[];
  estadoInicialSelecionado: string;
  handleEstadoInicialChange: (value: string) => void;
}

export function EstadoSelectable({
  estados,
  estadoInicialSelecionado,
  handleEstadoInicialChange,
}: EstadoSelectableProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <h4 style={{ textAlign: "left" }}>Selecione o estado inicial</h4>
      <div style={{ display: "flex", columnGap: 10 }}>
        {estados.map((v, i) =>
          v.value == "" ? null : (
            <button
              key={i}
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderStyle:
                  estadoInicialSelecionado == v.value ? "solid" : "none",
                borderColor:
                  estadoInicialSelecionado == v.value ? "#EC5766" : "",
                backgroundColor:
                  estadoInicialSelecionado == v.value ? "#fff" : "",
              }}
              value={v.value}
              onClick={() => handleEstadoInicialChange(v.value)}
            >
              {v.value}
            </button>
          )
        )}
      </div>
    </div>
  );
}
