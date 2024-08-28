import { useState } from "react";
import "../App.css";
import { useAfnContext, WordStatus } from "../context/AfnContext";
import { useNavigate } from "react-router-dom";

export function SimulateWordPage() {
  const afnContext = useAfnContext();

  const [word, setWord] = useState("");

  const nav = useNavigate();

  async function handleSimulateClick() {
    if (word.trim() == "") alert("Por favor digite uma palavra");
    else {
      await afnContext.simulateAccepting(word);
    }
  }

  return (
    <div className="afd-page">
      <h1>Área de simulação de palavras</h1>
      <div className="menu-container" style={{ height: "fit-content" }}>
        <div className="automato-container">
          <li>Digite a palavra para ser testada</li>
          <input
            className="word-input"
            placeholder="digite sua palavra"
            onChange={(ev) => setWord(ev.target.value)}
          />

          {afnContext.automatoAccepted != WordStatus.IDLE && (
            <p
              style={{
                color:
                  afnContext.automatoAccepted == WordStatus.ACCEPTED
                    ? "#488000"
                    : "red",
              }}
            >
              {afnContext.automatoAccepted == WordStatus.ACCEPTED
                ? "Palavra Aceita"
                : "Palavra Rejeitada"}
            </p>
          )}
        </div>

        <div className="btns-container">
          <button onClick={handleSimulateClick}>Simular</button>
          <button
            onClick={() => {
              afnContext.resetStatusOfWordAccepted();
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
