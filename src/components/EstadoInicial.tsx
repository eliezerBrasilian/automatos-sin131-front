interface EstadoInicialProps {
  estadoInicial: string;
}

export function EstadoInicial({ estadoInicial }: EstadoInicialProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Estado Inicial</p>
      <div
        style={{
          width: 30,
          height: 30,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#c1121f",
          border: "1px solid #780000",
        }}
      >
        <p>{estadoInicial}</p>
      </div>
    </div>
  );
}
