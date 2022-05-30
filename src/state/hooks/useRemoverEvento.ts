import { useSetRecoilState } from "recoil";

import { listaEvetnosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useRemoverEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaEvetnosState);

  const removerEvento = (evento: IEvento) => {
    setListaDeEventos((listaAntiga) =>
      listaAntiga.filter(({ id }) => id !== evento.id)
    );
  };

  return { removerEvento };
};

export default useRemoverEvento;
