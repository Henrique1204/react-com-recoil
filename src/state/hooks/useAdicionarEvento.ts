import { useSetRecoilState } from "recoil";

import { listaEvetnosState } from "../atom";
import { IEvento } from "../../interfaces/IEvento";
import { obeterId } from "../../util";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaEvetnosState);

  const adicionarEvento = (evento: IEvento) => {
    const hoje = new Date();

    if (evento.inicio.getDate() < hoje.getDate()) {
      throw new Error(
        "Eventos não podem ser cadastrados com data menor do que atual!"
      );
    }

    evento.id = obeterId();

    setListaDeEventos((listaAntiga) => [...listaAntiga, evento]);
  };

  return { adicionarEvento };
};

export default useAdicionarEvento;
