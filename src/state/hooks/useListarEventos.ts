import { useRecoilValue } from "recoil";

import { eventosFiltradosState } from "../seletores";

import { IEvento } from "../../interfaces/IEvento";

const useListarEventos = (): IEvento[] => {
  const eventos = useRecoilValue<IEvento[]>(eventosFiltradosState);

  return eventos;
};

export default useListarEventos;
