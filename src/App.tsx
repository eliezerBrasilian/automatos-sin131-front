import { AfnContextProvider } from "./context/AfnContext";
import { RoutesApp } from "./navigation/Routes";

function App() {
  return (
    <AfnContextProvider>
      <RoutesApp />
    </AfnContextProvider>
  );
}

export default App;
