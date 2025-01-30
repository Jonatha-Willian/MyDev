import React, {useState} from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function EditorCodigo(){
    const [codeString, setCodeString] = useState("")
    const texto = document.querySelector(".textarea-editor-texto") 
    const syntaxHighlight = document.querySelector(".textarea-editor-codigo")
    
    function pegarCodigo(event){
        setCodeString(event.target.value)
    }
    function botaoSyntaxHighlighter(){
        texto.classList.toggle("tag-codigo-inativa")
        syntaxHighlight.classList.toggle("tag-codigo-inativa")
    }

    return(
        <div className="container-editor-codigo-externo">
            <div className="container-editor-codigo-interno">
                <div className="container-img-editor-codigo">
                    <img className="img-editor-codigo" src="./src/assets/icone-terminal-editor-codigo.png" alt=""/>
                </div>
                    <div className="textarea-editor-codigo tag-codigo-inativa" tag-codigo-inativa>
                        <SyntaxHighlighter 
                            className="SyntaxHighlighter" 
                            language='javascript'
                            wrapLines={true}
                            showLineNumbers={true}
                            style={dracula}>{codeString}</SyntaxHighlighter>
                    </div>
                <div className="textarea-editor-texto">
                    <textarea 
                        className="textarea-codigo"
                        type='text'
                        placeholder='Digite seu Código aqui'
                        value={codeString}
                        onChange={pegarCodigo}
                    ></textarea>
                </div>
            </div>
            <button className="botao-editor-codigo" onClick={botaoSyntaxHighlighter} >Ativar / desativar SyntaxHighlight</button>
        </div>
    )
}

export default EditorCodigo