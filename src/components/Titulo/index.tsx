import { Titulo as EstiloDoTitulo } from "./styles"

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => {
  return (
    <EstiloDoTitulo fontSize={props.fontSize}>{props.children}</EstiloDoTitulo>
  )
}

export default Titulo
