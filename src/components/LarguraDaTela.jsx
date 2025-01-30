import React, {useState, useEffect} from "react"

function LarguraDaTelaAtual(){
    const [larguraTela, setLarguraTela] = useState(window.innerWidth)
    useEffect(() => {
        const larguraAtual = () => setLarguraTela(window.innerWidth);
        window.addEventListener("resize", larguraAtual)
        return () => window.removeEventListener("resize", larguraAtual);
    }, [])
    return larguraTela
}    


    export default LarguraDaTelaAtual
