import { EstadoItem, InputItem } from "../App";

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
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Selecione os estados finais</p>
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
                backgroundColor:
                  listaComEstadosSelecionados.findIndex(
                    (item) => item.id == v.id
                  ) != -1
                    ? "#EC5766"
                    : "",
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
