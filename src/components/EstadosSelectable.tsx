import { EstadoItem } from "../types/EstadoItem";
import { InputItem } from "../types/InputItem";

interface EstadosSelectableProps {
  estados: InputItem[];
  listaComEstadosSelecionados: EstadoItem[];
  handleEstadoDestinoChange: (id: number, value: string) => void;
}

export function EstadosSelectable({
  estados,
  listaComEstadosSelecionados,
  handleEstadoDestinoChange,
}: EstadosSelectableProps) {
  const isSelected = (v: InputItem) => {
    return (
      listaComEstadosSelecionados.findIndex((item) => item.id == v.id) != -1
    );
  };

  return (
    <div style={{ marginTop: 30 }}>
      <h4 style={{ textAlign: "left" }}>Selecione os estados finais</h4>
      <div style={{ display: "flex", columnGap: 10 }}>
        {estados.map((v) =>
          v.value == "" ? null : (
            <button
              style={{
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                borderStyle: isSelected(v) ? "solid" : "none",

                borderColor: isSelected(v) ? "#EC5766" : "",
                backgroundColor: isSelected(v) ? "#fff" : "",
              }}
              value={v.value}
              onClick={() => handleEstadoDestinoChange(v.id, v.value)}
            >
              {v.value}
            </button>
          )
        )}
      </div>
    </div>
  );
}
