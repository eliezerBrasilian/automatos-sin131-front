import { api } from "../api/Api";
import { Afn } from "./../types/Afn";

export class AutomatoService {
  async convertAfnToAfd(afn: Afn) {
    try {
      const resp = await api.post("convert-afn", afn);

      return resp.data as Afn;
    } catch (error) {
      throw new Error("ocoreu erro ao converter: " + error);
    }
  }

  async minimizeAfd(afd: Afn) {
    try {
      const resp = await api.post(`minimize`, afd);

      return resp.data as Afn;
    } catch (error) {
      throw new Error("ocoreu erro ao minimizar: " + error);
    }
  }

  async simulateAcceptingAfn(afn: Afn, palavra: string) {
    const body = {
      afn: afn,
      palavra: palavra,
    };
    try {
      const resp = await api.post("afn/aceita-palavra", body);

      console.log(resp.data);

      return resp.data as boolean;
    } catch (error) {
      throw new Error("ocoreu erro ao aceitar: " + error);
    }
  }

  async simulateAcceptingAfd(afd: Afn | null, palavra: string) {
    const body = {
      afd: afd,
      palavra: palavra,
    };

    if (afd == null) throw new Error("afd cannot be null");

    try {
      const resp = await api.post("afd/aceita-palavra", body);
      console.log(resp.data);
      return resp.data as boolean;
    } catch (error) {
      throw new Error("ocoreu erro ao aceitar: " + error);
    }
  }
}
