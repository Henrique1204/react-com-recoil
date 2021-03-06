import React from "react";
import Kalend, { CalendarView, OnEventDragFinish } from "kalend";

import "kalend/dist/styles/index.css";

import style from "./Calendario.module.scss";
import ptBR from "./localizacao/ptBR.json";

import useAtualizarEvento from "../../state/hooks/useAtualizarEvento";
import useListarEventos from "../../state/hooks/useListarEventos";

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendario: React.FC = () => {
  const eventosKalend = new Map<string, IKalendEvento[]>();

  const eventos = useListarEventos();
  const { atualizaEvento } = useAtualizarEvento();

  eventos.forEach((evento) => {
    const chave = evento.inicio.toISOString().slice(0, 10);

    if (!eventosKalend.has(chave)) {
      eventosKalend.set(chave, []);
    }

    eventosKalend.get(chave)?.push({
      id: evento.id,
      startAt: evento.inicio.toISOString(),
      endAt: evento.fim.toISOString(),
      summary: evento.descricao,
      color: "blue",
    });
  });

  const onEventDragFinish: OnEventDragFinish = (_, kalendarNovo) => {
    const evento = eventos.find(
      ({ descricao }) => descricao === kalendarNovo.summary
    );

    if (evento) {
      const eventoAtualizado = { ...evento };

      eventoAtualizado.inicio = new Date(kalendarNovo.startAt);
      eventoAtualizado.fim = new Date(kalendarNovo.endAt);

      atualizaEvento(eventoAtualizado);
    }
  };

  return (
    <div className={style.Container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"customLanguage"}
        customLanguage={ptBR}
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendario;
