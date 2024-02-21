import styled from "styled-components"

import { PropsParagrafo } from "."

export const Paragrafo = styled.h3<PropsParagrafo>`
  color: ${props =>
    props.color === "principal"
      ? props.theme.corPrincipal
      : props.theme.corSecundaria};
  font-size: ${props => (props.fontSize ? props.fontSize + "px" : "14px")};
  font-weight: bold;
  line-height: 22px;
  margin-top: ${props => (props.marginTop ? props.marginTop + "px" : "0px")};
`
