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
        backgroundColor: isSelected ? "#D91E36" : "#201E1F",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
