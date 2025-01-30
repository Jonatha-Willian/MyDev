import LarguraDaTelaAtual from "./LarguraDaTela"
function Header(){
    
    const larguraTela = LarguraDaTelaAtual()   
    if(larguraTela <= 768){
            return(
                <div className="cabecalho">
                    <img src="./src/assets/mydev-logo.png" alt="Logo MyDev" className="logo-my-dev"/>
                    <div className="container-pesquisa-menu-mobile">
                        <img className="icone-lupa" src="./src/assets/icone-lupa.png" alt="" />
                        <img className="icone-menu" src="./src/assets/icone-menu.png" alt="" />
                    </div>  
                </div>
            )
        }else{
            return(
                <div className="cabecalho">
                    <div className="container-img-logo-cabecalho">
                        <img src="./src/assets/mydev-logo.png" alt="Logo MyDev" className="logo-my-dev"/>
                    </div>
                    <div className="container-pesquisa">
                        <input className="barra-pesquisa" placeholder="O que você procura?"/> 
                    </div>
                <div className="container-perfil">
                    <a hre="#" className="texto-perfil" >Meu Perfil</a>
                    <img className="foto-perfil" src="./src/assets/foto-perfil.jpg" alt="foto dev"/>
                    </div>  
                </div>
            )
        }
}

export default Header