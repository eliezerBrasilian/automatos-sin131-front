import { Alfabeto } from "../types/Alfabeto";

interface AlfabetoViewComponentProps {
  alfabeto: Alfabeto | undefined;
}

export function AlfabetoViewComponent({
  alfabeto,
}: AlfabetoViewComponentProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Alfabeto</p>
      <div style={{ display: "flex", columnGap: 10 }}>
        {alfabeto?.caracteres.map((v) => (
          <div
            style={{
              width: 30,
              height: 30,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "1px solid #EC5766",
            }}
          >
            <p>{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
