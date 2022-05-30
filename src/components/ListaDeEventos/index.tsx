import React from "react";

import style from "./ListaDeEventos.module.scss";

import Evento from "../Evento";
import Filtro from "../Filtro";
import useListarEventos from "../../state/hooks/useListarEventos";

interface IListaDeEventosProps {
  aoFiltroAplicado: (data: Date | null) => void;
}

const ListaDeEventos: React.FC<IListaDeEventosProps> = ({
  aoFiltroAplicado,
}) => {
  const eventos = useListarEventos();

  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />

      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento evento={evento} key={evento.id} />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
