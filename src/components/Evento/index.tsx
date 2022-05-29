import React from "react";
import { useSetRecoilState } from "recoil";

import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";

import { IEvento } from "../../interfaces/IEvento";
import { listaEvetnosState } from "../../state/atom";

const Evento: React.FC<{
  evento: IEvento;
}> = ({ evento }) => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaEvetnosState);

  const estilos = [style.Evento];

  if (evento.completo) estilos.push(style.completo);

  const excluirEvento = () => {
    setListaDeEventos((listaAntiga) =>
      listaAntiga.filter(({ id }) => id !== evento.id)
    );
  };

  return (
    <div className={estilos.join(" ")}>
      <EventoCheckbox evento={evento} />

      <div className="cards-info">
        <h3 className={style.descricao}>
          {evento.descricao} - {evento.inicio.toLocaleDateString()}
        </h3>
      </div>

      <i className="far fa-times-circle fa-2x" onClick={excluirEvento}></i>
    </div>
  );
};

export default Evento;
