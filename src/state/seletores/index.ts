import { selector } from "recoil";

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
