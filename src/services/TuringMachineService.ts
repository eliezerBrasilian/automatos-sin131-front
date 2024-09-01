import { turingApi } from "../api/Api";

export class TuringMachineService {
  async ehPar(number: string) {
    try {
      const resp = await turingApi.post("numero-eh-par/" + number);

      return resp.data as boolean;
    } catch (error) {
      throw new Error("ocoreu erro ao converter: " + error);
    }
  }
  async valorIncrementado(number: string) {
    try {
      const resp = await turingApi.post("valorIncrementado/" + number);

      return resp.data as string;
    } catch (error) {
      throw new Error("ocoreu erro ao converter: " + error);
    }
  }
}
