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
          backgroundColor: "#EF7674",
          border: "1px solid white",
        }}
      >
        <p>{estadoInicial}</p>
      </div>
    </div>
  );
}
