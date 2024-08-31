import { useState } from "react";
import "../App.css";
import { useAfnContext } from "../context/AfnContext";
import { useNavigate } from "react-router-dom";
import { TuringMachineService } from "../services/TuringMachineService";

enum NumeroStatus {
  IDLE,
  PAR,
  IMPAR,
}

export function TuringMachine() {
  const afnContext = useAfnContext();

  const [binaryNumber, setbinaryNumber] = useState("");
  const [numeroStatus, setNumeroStatus] = useState<NumeroStatus>(
    NumeroStatus.IDLE
  );

  const nav = useNavigate();
  const turingService = new TuringMachineService();

  async function handleClickNumeroPar() {
    if (binaryNumber.trim() == "") {
      alert("Por favor digite um numero é binário");
    } else {
      const resp = await turingService.ehPar(binaryNumber);

      setNumeroStatus(resp ? NumeroStatus.PAR : NumeroStatus.IMPAR);
    }
  }
  async function handleClickPalindromo() {
    if (binaryNumber.trim() == "") {
      alert("Por favor digite um numero é binário");
    } else {
      const resp = await turingService.palindromo(binaryNumber);

      setNumeroStatus(resp ? NumeroStatus.PAR : NumeroStatus.IMPAR);
    }
  }

  return (
    <div className="afd-page">
      <h1>Máquina de Turing</h1>
      <div className="menu-container" style={{ height: "fit-content" }}>
        <div className="automato-container">
          <li>Digite o número em binário</li>
          <input
            className="word-input"
            placeholder="digite o numero em binário"
            type="number"
            onChange={(ev) => setbinaryNumber(ev.target.value)}
          />

          {numeroStatus != NumeroStatus.IDLE && (
            <p
              style={{
                color: numeroStatus == NumeroStatus.PAR ? "#488000" : "red",
              }}
            >
              {numeroStatus == NumeroStatus.PAR
                ? "SIM: Foi aceito pela máquina"
                : "NÃO: Foi rejeitado pela máquina"}
            </p>
          )}
        </div>

        <div className="btns-container">
          <button onClick={handleClickNumeroPar}>Número par em binário</button>
          <button onClick={handleClickPalindromo}>Palíndromos</button>
          <button
            onClick={() => {
              afnContext.reset();
              nav(-1);
            }}
          >
            Retornar ao menu anterior
          </button>
        </div>
      </div>
    </div>
  );
}
