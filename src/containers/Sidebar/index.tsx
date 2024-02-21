import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao } from "./styles"

const Sidebar = () => {
  return (
    <aside>
      <Avatar></Avatar>
      <Titulo fontSize={20}>Klein</Titulo>
      <Paragrafo color="EEE" fontSize={16}>
        joaopedroklein
      </Paragrafo>
      <Descricao fontSize={12}>Engenheiro Front-End</Descricao>
      <button>Trocar tema</button>
    </aside>
  )
}

export default Sidebar
