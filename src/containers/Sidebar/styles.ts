import styled from "styled-components"
import Paragrafo from "../../components/Paragrafo"

export const Descricao = styled(Paragrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  background-color: #282a35;
  cursor: pointer;
  margin-top: 35px;
  margin-bottom: 35px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80;
  left: 0;
`
