import styled from "styled-components"

export const BotaoTema = styled.button`
  font-size: 10px;
  font-weight: bold;
  border-radius: 12px;
  padding: 8px;
  color: ${props => props.theme.corDeFundo};
  background-color: ${props => props.theme.corPrincipal};
  cursor: pointer;
  margin-top: 35px;
  margin-bottom: 40px;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
