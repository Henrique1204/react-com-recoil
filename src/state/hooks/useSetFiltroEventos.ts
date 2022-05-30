import { useSetRecoilState } from "recoil";

import { filtroDeEventos } from "../atom";
import { IFiltroDeEvento } from "../../interfaces/IFiltroDeEvento";

const useSetFiltroEventos = () => {
  const setFiltro = useSetRecoilState<IFiltroDeEvento>(filtroDeEventos);

  return { setFiltro };
};

export default useSetFiltroEventos;
