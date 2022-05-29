import { useSetRecoilState } from "recoil";

import { listaEvetnosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaEvetnosState);

  const atualizaEvento = (evento: IEvento) => {
    setListaDeEventos((listaAntiga) => {
      const index = listaAntiga.findIndex(({ id }) => id === evento.id);

      return [
        ...listaAntiga.slice(0, index),
        evento,
        ...listaAntiga.slice(index + 1),
      ];
    });
  };

  return { atualizaEvento };
};

export default useAtualizarEvento;
