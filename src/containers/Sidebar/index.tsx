import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { BotaoTema, Descricao, SidebarContainer } from "./styles"

const Sidebar = () => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar></Avatar>
        <Titulo fontSize={20}>Klein</Titulo>
        <Paragrafo color="BBB" fontSize={16}>
          joaopedroklein
        </Paragrafo>
        <Descricao marginTop={20} color="CCC" fontSize={11}>
          Engenheiro Front-End
        </Descricao>
        <BotaoTema>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
