import React from "react";

import style from "./Evento.module.scss";
import EventoCheckbox from "./EventoCheckbox";

import { IEvento } from "../../interfaces/IEvento";
import useRemoverEvento from "../../state/hooks/useRemoverEvento";

const Evento: React.FC<{
  evento: IEvento;
}> = ({ evento }) => {

  const { removerEvento } = useRemoverEvento();

  const estilos = [style.Evento];

  if (evento.completo) estilos.push(style.completo);

  const excluirEvento = () => removerEvento(evento);

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
