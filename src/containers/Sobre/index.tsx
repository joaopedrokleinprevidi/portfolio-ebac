import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"

const sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre</Titulo>
      <Paragrafo color="secundaria">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, sequi
        quos sunt ut eius iusto inventore necessitatibus, accusantium
        consequatur, quod repudiandae maiores magni? Accusamus, enim voluptates
        ab quae pariatur eius.
      </Paragrafo>
      <GithubSecao>
        <img
          src="https://github-readme-stats.vercel.app/api?username=joaopedrokleinprevidi&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="Informações específicas do GitHub"
        />
        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=joaopedrokleinprevidi&layout=compact&langs_count=7&theme=dracula"
          alt="Informações específicas do GitHub"
        />
      </GithubSecao>
    </section>
  )
}

export default sobre
