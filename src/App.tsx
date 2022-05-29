import React from "react";
import { RecoilRoot } from "recoil";

import style from "./App.module.scss";

import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Calendario from "./components/Calendario";
import ListaDeEventos from "./components/ListaDeEventos";

const App = () => {
  // const [eventos, setEventos] = useState<IEvento[]>([]);

  const [filtro, setFiltro] = React.useState<Date | null>();

  const alterarStatusEvento = (id: number) => {
    // const evento = eventos.find((evento) => evento.id === id);
    // if (evento) {
    //   evento.completo = !evento.completo;
    // }
    // setEventos([...eventos]);
  };

  const aplicarFiltro = (data: Date | null) => {
    setFiltro(data);
  };

  // const filtrados = !filtro
  //   ? eventos
  //   : eventos.filter(
  //       (evento) =>
  //         filtro!.toISOString().slice(0, 10) ===
  //         evento.inicio.toISOString().slice(0, 10)
  //     );

  return (
    <RecoilRoot>
      <div className={style.App}>
        <div className={style.Coluna}>
          <Card>
            <Formulario />
          </Card>

          <hr />

          <Card>
            <ListaDeEventos
              aoFiltroAplicado={aplicarFiltro}
              aoAlterarStatus={alterarStatusEvento}
            />
          </Card>
        </div>

        <div className={style.Coluna}>
          <Calendario />
        </div>
      </div>
    </RecoilRoot>
  );
};

export default App;
