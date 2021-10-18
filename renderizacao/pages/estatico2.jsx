//SERVER SIDE RENDERING
//RENDERIZAÇÃO A PARTIR DO BUILD E NAO QUANDO O CLIENTE ENTRA NA PAGINA
export function getStaticProps(){
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default function Estatico2(props){
    return (
        <div>
            <h1>Estático #02</h1>
            <h2>{props.numero}</h2>
        </div>
    )
}