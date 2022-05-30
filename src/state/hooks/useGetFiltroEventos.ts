import { useRecoilValue } from "recoil";

import { filtroDeEventos } from "../atom";
import { IFiltroDeEvento } from "../../interfaces/IFiltroDeEvento";

const useGetFiltroEventos = () => {
  const filtro = useRecoilValue<IFiltroDeEvento>(filtroDeEventos);

  return filtro;
};

export default useGetFiltroEventos;
