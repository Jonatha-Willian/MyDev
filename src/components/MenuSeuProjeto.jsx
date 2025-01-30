
function MenuSeuProjeto(){
    return(
        <div className="menu-seu-projeto">
            <h2 className="titulos-menu-seu-projeto">SEU PROJETO</h2>
            <input className="input-menu-seu-projeto-nome" type="text" placeholder="Nome do seu projeto"/>
            <input className="input-menu-seu-projeto-descricao" type="text" placeholder="Descrição do seu projeto"/>
            <h2 className="titulos-menu-seu-projeto">PERSONALIZAÇÃO</h2>
            <select className="selecao-linguagem-menu-seu-projeto" name="linguagem" id="langulinguagemage">
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="c++">C++</option>
                <option value="java">Java</option>
            </select>
            <input type="color" className="seletor-cor-menu-seu-projeto"/>
            <button className="botao-cor-menu-seu-projeto">Salvar projeto</button>
        </div>
    )
}

export default MenuSeuProjeto