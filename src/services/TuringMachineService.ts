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
  async palindromo(number: string) {
    try {
      const resp = await turingApi.post("palindromo/" + number);

      return resp.data as boolean;
    } catch (error) {
      throw new Error("ocoreu erro ao converter: " + error);
    }
  }
}
