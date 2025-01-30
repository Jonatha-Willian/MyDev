import EditorCodigo from "./components/EditorCodigo"
import Header from "./components/Header"
import MenuNavegacao from "./components/MenuNavegacao"
import MenuSeuProjeto from "./components/MenuSeuProjeto"
import Comunidade from "./components/Comunidade"

function App() { 

  return (
    <>
      <Header/>
      <div className="container-princiapal">
        <MenuNavegacao/>
        <div className="div-editor-de-codigo">
          <EditorCodigo/>
        </div>
        <div className="div-menu-seu-projeto">
          <MenuSeuProjeto/>
        </div>
        <div className="div-comunidade componente-inativo">
          <Comunidade/>
        </div>
      </div>
    </>
  )
}

export default App
