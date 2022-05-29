import React from "react";
import { useSetRecoilState } from "recoil";
import { IEvento } from "../../../interfaces/IEvento";
import { listaEvetnosState } from "../../../state/atom";

const EventoCheckbox: React.FC<{
  evento: IEvento;
}> = ({ evento }) => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaEvetnosState);

  const estilos = [
    "far",
    "fa-2x",
    evento.completo ? "fa-check-square" : "fa-square",
  ];

  const alterarStatus = () => {
    const novoEvento = { ...evento, completo: !evento.completo };

    setListaDeEventos((listaAntiga) => {
      const index = listaAntiga.findIndex(({ id }) => id === evento.id);

      return [
        ...listaAntiga.slice(0, index),
        novoEvento,
        ...listaAntiga.slice(index + 1),
      ];
    });
  };

  return <i className={estilos.join(" ")} onClick={alterarStatus}></i>;
};

export default EventoCheckbox;
