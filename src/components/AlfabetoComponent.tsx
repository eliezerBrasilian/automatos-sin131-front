import { InputItem } from "../types/InputItem";
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
    <div style={{ marginTop: 30, marginLeft: 60 }}>
      <h4 style={{ textAlign: "left" }}>Informe o alfabeto</h4>
      <div style={{ display: "flex", columnGap: 10 }}>
        {inputs.map((v, i) => (
          <input
            key={i}
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
