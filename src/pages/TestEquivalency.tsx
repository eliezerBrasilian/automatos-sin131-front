import { useState } from "react";
import "../App.css";
import { useAfnContext } from "../context/AfnContext";
import { useNavigate } from "react-router-dom";
import { WordStatus } from "../data/enums/WordStatus";

export function TestEquivalency() {
  const afnContext = useAfnContext();

  const [word, setWord] = useState("");

  const nav = useNavigate();

  async function handleSimulateClick() {
    if (word.trim() == "") alert("Por favor digite uma palavra");
    else {
      await afnContext.testEquivalency(word);
    }
  }

  return (
    <div className="afd-page">
      <h1>Simulação de Equivalência entre AFN e AFD convertido</h1>
      <div className="menu-container" style={{ height: "fit-content" }}>
        <div className="automato-container">
          <li>Digite a palavra para ser testada</li>
          <input
            className="word-input"
            placeholder="digite sua palavra"
            onChange={(ev) => setWord(ev.target.value)}
          />

          {afnContext.equivalencyState.originalAfn != WordStatus.IDLE &&
            afnContext.equivalencyState.afdConvertedFromAfn !=
              WordStatus.IDLE && (
              <div>
                <p
                  style={{
                    color:
                      afnContext.equivalencyState.originalAfn ==
                      WordStatus.ACCEPTED
                        ? "#488000"
                        : "red",
                  }}
                >
                  {afnContext.equivalencyState.originalAfn ==
                  WordStatus.ACCEPTED
                    ? "Palavra Aceita na AFN"
                    : "Palavra Rejeitada na AFN"}
                </p>
                <p
                  style={{
                    color:
                      afnContext.equivalencyState.afdConvertedFromAfn ==
                      WordStatus.ACCEPTED
                        ? "#488000"
                        : "red",
                  }}
                >
                  {afnContext.equivalencyState.afdConvertedFromAfn ==
                  WordStatus.ACCEPTED
                    ? "Palavra Aceita na AFD"
                    : "Palavra Rejeitada na AFD"}
                </p>
                {afnContext.equivalencyState.afdConvertedFromAfn ==
                  WordStatus.ACCEPTED &&
                  afnContext.equivalencyState.originalAfn ==
                    WordStatus.ACCEPTED && (
                    <p
                      style={{
                        color: "#488000",
                      }}
                    >
                      AFN e AFD são equivalentes
                    </p>
                  )}
              </div>
            )}
        </div>

        <div className="btns-container">
          <button onClick={handleSimulateClick}>Testar equivalência</button>
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
