import { Paragrafo as EstiloDoParagrafo } from "./styles"

export type PropsParagrafo = {
  children: string
  color?: string
  fontSize?: number
}

const Paragrafo = (props: PropsParagrafo) => {
  return (
    <EstiloDoParagrafo fontSize={props.fontSize} color={props.color}>
      {props.children}
    </EstiloDoParagrafo>
  )
}

export default Paragrafo
