import { useRecoilValue } from "recoil";

import { listaEvetnosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";

const useListarEventos = (): IEvento[] => {
  const eventos = useRecoilValue<IEvento[]>(listaEvetnosState);

  return eventos;
};

export default useListarEventos;
