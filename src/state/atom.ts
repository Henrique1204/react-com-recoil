import { atom } from "recoil";

import { eventosAsync } from "./seletores";

import { IEvento } from "../interfaces/IEvento";
import { IFiltroDeEvento } from "../interfaces/IFiltroDeEvento";

export const listaEvetnosState = atom<IEvento[]>({
  key: "listaDeEventosState",
  default: eventosAsync,
});

export const filtroDeEventos = atom<IFiltroDeEvento>({
  key: "filtroDeEventos",
  default: {},
});
