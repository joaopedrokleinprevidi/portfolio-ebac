import { ThemeProvider } from "styled-components"
import { useState } from "react"

import EstiloGlobal, { Container } from "./styles"
import Sidebar from "./containers/Sidebar/index"
import Sobre from "./containers/Sobre/index"
import Projetos from "./containers/Projetos"
import temaLight from "./themes/light"
import temaDark from "./themes/dark"

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />

      <Container>
        <Sidebar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
