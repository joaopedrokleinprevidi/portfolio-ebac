import styled from "styled-components"

import { PropsParagrafo } from "."

export const Paragrafo = styled.h3<PropsParagrafo>`
  color: ${props => (props.color ? "#" + props.color : "#282A35")};
  font-size: ${props => (props.fontSize ? props.fontSize + "px" : "14px")};
  font-weight: bold;
  line-height: 22px;
  margin-top: ${props => (props.marginTop ? props.marginTop + "px" : "0px")};
`
