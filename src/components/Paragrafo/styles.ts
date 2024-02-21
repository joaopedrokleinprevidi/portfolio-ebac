import styled from "styled-components"

import { PropsParagrafo } from "."

export const Paragrafo = styled.h3<PropsParagrafo>`
  color: ${props => (props.color ? "#" + props.color : "#282A35")};
  font-size: 14px;
  font-weight: bold;
  line-height: 22px;
`
