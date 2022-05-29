import React from "react";
import { useRecoilValue } from "recoil";

import style from "./ListaDeEventos.module.scss";

import { listaEvetnosState } from "../../state/atom";

import Evento from "../Evento";
import Filtro from "../Filtro";

interface IListaDeEventosProps {
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
  aoFiltroAplicado: (data: Date | null) => void;
}

const ListaDeEventos: React.FC<IListaDeEventosProps> = ({
  aoDeletarEvento,
  aoAlterarStatus,
  aoFiltroAplicado,
}) => {
  const eventos = useRecoilValue(listaEvetnosState);

  return (
    <section>
      <Filtro aoFiltroAplicado={aoFiltroAplicado} />

      <div className={style.Scroll}>
        {eventos.map((evento) => (
          <Evento
            aoAlterarStatus={aoAlterarStatus}
            aoDeletarEvento={aoDeletarEvento}
            evento={evento}
            key={evento.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ListaDeEventos;
