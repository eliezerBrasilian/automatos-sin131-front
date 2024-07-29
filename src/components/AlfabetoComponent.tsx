import { InputItem } from "../App";
import { ButtonAdd } from "./BtnAdd";
import { getCaracter } from "./TransicaoComponent";

interface AlfabetoComponentProps {
  inputs: InputItem[];
  handleInputChange: (id: number, value: string) => void;
  handleAddInput: () => void;
}

export function AlfabetoComponent({
  inputs,
  handleInputChange,
  handleAddInput,
}: AlfabetoComponentProps) {
  return (
    <div style={{ marginTop: 30 }}>
      <p style={{ textAlign: "left" }}>Informe o alfabeto</p>
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
            placeholder={getCaracter(v.id)}
            value={v.value}
            onChange={(e) => handleInputChange(v.id, e.target.value)}
          />
        ))}

        <ButtonAdd onClick={handleAddInput} />
      </div>
    </div>
  );
}
