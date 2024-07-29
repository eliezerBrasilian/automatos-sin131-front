import { InputItem } from "../App";
import { ButtonAdd } from "./BtnAdd";

interface EstadosComponentProps {
  inputs: InputItem[];
  handleInputChange: (id: number, value: string) => void;
  handleAddInput: () => void;
}

export function EstadosComponent({
  inputs,
  handleInputChange,
  handleAddInput,
}: EstadosComponentProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Informe os estados</p>
      <div style={{ display: "flex", columnGap: 10 }}>
        {inputs.map((v) => (
          <input
            style={{
              width: 40,
              height: 40,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            type="text"
            placeholder={`q${v.id.toString()}`}
            value={v.value}
            onChange={(e) => handleInputChange(v.id, e.target.value)}
          />
        ))}

        <ButtonAdd onClick={handleAddInput} />
      </div>
    </div>
  );
}
