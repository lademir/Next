import Botao from "../components/Botao";

export default function Inicio() {
    return (
        <div style={{display:"flex",justifyContent:"center", alignItems:"center", height:"100vh", flexDirection:"column"}}>
            <h1>Laluna's game</h1>
            <Botao texto="Iniciar" href="/perguntas"/>
        </div>
    )
}