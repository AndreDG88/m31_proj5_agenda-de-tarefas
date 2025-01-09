import BarraLateral from '../../containers/BarraLateral/barra_lateral-index'
import Formulario from '../../containers/Formulario/formulario-index'

//Config da pagina para cadastro de novas tarefas utilizando o sistema de páginas React Router DOM
const Cadastro = () => (
  <>
    <BarraLateral mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
