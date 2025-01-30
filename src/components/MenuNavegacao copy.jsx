import LarguraDaTelaAtual from "./LarguraDaTela"
import React, {useState} from "react";
function MenuNavegacao(){
    
    const editorCodigo = document.querySelector(".div-editor-de-codigo");
    const menuSeuProjeto = document.querySelector(".div-menu-seu-projeto");
    const comunidade = document.querySelector(".div-comunidade");

    function mudarParaComunidade(){
        editorCodigo.classList.add("componente-inativo")
        menuSeuProjeto.classList.add("componente-inativo")
        comunidade.classList.remove("componente-inativo") 
                
                              
    }
    function mudarParaEditor(){       
        editorCodigo.classList.remove("componente-inativo")
        menuSeuProjeto.classList.remove("componente-inativo")
        comunidade.classList.add("componente-inativo")  
           
    }
    

    const larguraTela = LarguraDaTelaAtual()   
    if(larguraTela <= 768){
        return(
            <div></div>
        )
    }else{
        return(
            <div className="menu-navegacao">
                <h2 className="titulo-menu-navegacao">MENU</h2>
                <ul className="lista-menu-navegacao">
                    <li className="item-menu-navegacao" onClick={mudarParaEditor}>
                        <img className="img-menu-navegacao" 
                            src="./src/assets/icone-editor-codigo.png">
                        </img>
                    <a href="#" className="texto-menu-navegacao">Editor de código</a>
                    </li>
                    <li className="item-menu-navegacao" onClick={mudarParaComunidade}>
                        <img className="img-menu-navegacao" 
                         src="./src/assets/icone-comunidade.png">
                        </img>
                        <a href="#" className="texto-menu-navegacao">Comunidade</a>
                    </li>
                </ul>
            </div>
        )
    }
    
}

export default MenuNavegacao