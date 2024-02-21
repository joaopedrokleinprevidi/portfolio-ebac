import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { BotaoTema, SidebarContainer } from "./styles"

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar></Avatar>
        <Titulo fontSize={20}>Klein</Titulo>
        <Paragrafo color="principal" fontSize={16}>
          joaopedroklein
        </Paragrafo>
        <Paragrafo marginTop={24} color="secundaria" fontSize={11}>
          Engenheiro Front-End
        </Paragrafo>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
