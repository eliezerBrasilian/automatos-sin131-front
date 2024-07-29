interface ButtonAddProps {
  onClick: () => void;
}

export function ButtonAdd({ onClick }: ButtonAddProps) {
  return (
    <button
      onClick={onClick}
      style={{
        width: 35,
        height: 35,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 35 / 2,
        backgroundColor: "#DA344D",
      }}
    >
      +
    </button>
  );
}
