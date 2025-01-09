//Config da pagina home utilizando o sistema de páginas React Router DOM
import BotaoAdicionar from '../../components/BtnAdicionar/BtnAdicionar-index'
import BarraLateral from '../../containers/BarraLateral/barra_lateral-index'
import ListaDeTarefas from '../../containers/ListaDeTarefas/lista_de_tarefas-index'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
