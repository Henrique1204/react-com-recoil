import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";

import { filtroDeEventos, listaEvetnosState } from "../atom";

const getComecoDaData = (data: Date) => {
  return data.toISOString().split("T")[0];
};

export const eventosFiltradosState = selector({
  key: "eventosFiltradosState",
  get: ({ get }) => {
    const todosOsEventos = get(listaEvetnosState);
    const filtro = get(filtroDeEventos);

    const eventos = todosOsEventos.filter(({ inicio }) => {
      if (!filtro.data) return true;

      const isMesmoDia =
        getComecoDaData(filtro.data) === getComecoDaData(inicio);

      return isMesmoDia;
    });

    return eventos;
  },
});

export const eventosAsync = selector({
  key: "eventosAsync",
  get: async () => {
    try {
      const res = await fetch("http://localhost:8080/eventos");
      const dados: IEvento[] = await res.json();

      return dados.map((evento) => ({
        ...evento,
        inicio: new Date(evento.inicio),
        fim: new Date(evento.fim),
      }));
    } catch (_) {
      return [];
    }
  },
});
