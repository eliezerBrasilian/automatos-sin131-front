import { Estado } from "../types/Estado";

interface EstadosViewComponentProps {
  estados?: Estado[];
}

export function EstadosViewComponent({ estados }: EstadosViewComponentProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Estados Finais</p>
      <div style={{ display: "flex", columnGap: 10 }}>
        {estados?.map((v) => (
          <div
            style={{
              minWidth: 60,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#c1121f",
              border: "1px solid #780000",
            }}
          >
            <p>{v.nome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
