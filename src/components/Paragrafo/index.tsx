import { Paragrafo as EstiloDoParagrafo } from "./styles"

export type PropsParagrafo = {
  children: string
  color?: string
}

const Paragrafo = (props: PropsParagrafo) => {
  return (
    <EstiloDoParagrafo color={props.color}>{props.children}</EstiloDoParagrafo>
  )
}

export default Paragrafo
