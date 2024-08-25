interface ItemProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

export function Item({ text, isSelected, onClick }: ItemProps) {
  return (
    <button
      className="item-btn"
      style={{
        backgroundColor: isSelected ? "#ffffff" : "rgb(34, 156, 42)",
        border: isSelected ? "3px solid blue" : "none",
        width: "258px",
        height: "45px",
        borderRadius: "0",
        color: isSelected ? "blue" : "white",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
