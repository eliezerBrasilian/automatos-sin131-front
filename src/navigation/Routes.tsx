import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Rotas } from "./Rotas";
import { CreateAfdPage } from "../pages/CreateAfdPage";
import { CreateAfnPage } from "../pages/CreateAfnPage";
import { HomePage } from "../pages/HomePage";
import { TestEquivalency } from "../pages/TestEquivalency";
import { SimulateWordPage } from "../pages/SimulateWordPage";

export function RoutesApp() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path={Rotas.HOME} element={<HomePage />} />

        <Route path={Rotas.CREATE_AFD} element={<CreateAfdPage />} />
        <Route path={Rotas.CREATE_AFN} element={<CreateAfnPage />} />
        <Route path={Rotas.SIMULATE_WORD} element={<SimulateWordPage />} />
        <Route path={Rotas.TEST_EQUIVALENCY} element={<TestEquivalency />} />
      </Routes>
    </BrowserRouter>
  );
}
