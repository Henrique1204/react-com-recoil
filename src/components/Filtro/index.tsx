import React, { useState } from "react";
import useSetFiltroEventos from "../../state/hooks/useSetFiltroEventos";
import style from "./Filtro.module.scss";

const Filtro: React.FC = () => {
  const { setFiltro } = useSetFiltroEventos();
  const [data, setData] = useState("");

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();

    if (!data) return setFiltro({ data: undefined });

    setFiltro({ data: new Date(data) });
  };

  return (
    <form className={style.Filtro} onSubmit={submeterForm}>
      <h3 className={style.titulo}>Filtrar por data</h3>

      <input
        type="date"
        name="data"
        className={style.input}
        onChange={(evento) => setData(evento.target.value)}
        placeholder="Por data"
        value={data}
      />

      <button className={style.botao}>Filtrar</button>
    </form>
  );
};

export default Filtro;
