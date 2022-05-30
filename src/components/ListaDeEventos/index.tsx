import React from "react";

import style from "./ListaDeEventos.module.scss";

import Evento from "../Evento";
import Filtro from "../Filtro";

import useListarEventos from "../../state/hooks/useListarEventos";
import useGetFiltroEventos from "../../state/hooks/useGetFiltroEventos";

const getComecoDaData = (data: Date) => {
  return data.toISOString().split("T")[0];
};

const ListaDeEventos: React.FC = () => {
  const todosEventos = useListarEventos();
  const filtro = useGetFiltroEventos();

  const eventos = todosEventos.filter(({ inicio }) => {
    if (!filtro.data) return true;

    const isMesmoDia = getComecoDaData(filtro.data) === getComecoDaData(inicio);

    return isMesmoDia;
  });

  return (
    <section>
      <Filtro />

      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
